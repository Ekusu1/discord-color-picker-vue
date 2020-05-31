import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';
import { isValidJson } from "@/utils";

Vue.use(Vuex);

const localStorageName = 'ex-discord-color-picker';

const defaultColors = [{ name: 'username', hexColor: '#99aab5' }];
const defaultPalette = [
	'#99aab5', '#ffffff', '#808080', '#000000',
	'#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#e91e63', '#f1c40f', '#e74c3c', '#95a5a6', '#607d8b',
	'#11806a', '#1f8b4c', '#206694', '#71368a', '#ad1457', '#c27c0e', '#992d22', '#979c9f', '#546e7a'
];

const store = new Vuex.Store({
	state: {
		showAmoled: true,
		useWhitneyFont: true,
		hideInstructionsInitial: false,
		colors: [...defaultColors],
		palette: [...defaultPalette]
	},
	getters: {
		showAmoled: state => state.showAmoled,
		useWhitneyFont: state => state.useWhitneyFont,
		hideInstructionsInitial: state => state.hideInstructionsInitial,
		colors: state => state.colors,
		colorsRemovable: state => state.colors.length > 1,
		palette: state => state.palette
	},
	mutations: {
		showAmoled(state, newValue) {
			state.showAmoled = newValue;
		},
		useWhitneyFont(state, newValue) {
			state.useWhitneyFont = newValue;
		},
		hideInstructionsInitial(state, newValue) {
			state.hideInstructionsInitial = newValue;
		},
		colors(state, newValue) {
			state.colors = newValue;
		},
		rowColor(state, {index, hexColor}) {
			state.colors[index].hexColor = hexColor.toUpperCase()
		},
		resetColors(state) {
			state.colors = [...defaultColors];
		},
		addColor(state) {
			state.colors.push({...defaultColors[0]});
		},
		cloneColor(state, index) {
			state.colors.splice(index, 0, JSON.parse(JSON.stringify(state.colors[index])));
		},
		removeColor(state, index) {
			state.colors.splice(index, 1);
		},
		palette(state, newValue) {
			state.palette = newValue;
		},
		resetPalette(state) {
			state.palette = [...defaultPalette];
		}
	},
	actions: {
		importColors({ state, commit }, jsonString) {
			try {
				const patterns = {
					hex3:  /^#[A-F0-9]{3}$/,
					hex3a: /^#[A-F0-9]{4}$/,
					hex6:  /^#[A-F0-9]{6}$/,
					hex6a: /^#[A-F0-9]{8}$/,
				}

				let index = 0
				const colors = isValidJson(jsonString).map(entry => {
					let { name, hexColor } = entry;

					if (!name) {
						throw `name not provided on index ${index}`;
					}
					if (!hexColor) {
						throw `hexColor not provided for '${name}' on index ${index}`;
					}

					hexColor = hexColor.toUpperCase()

					// check if valid hex color pattern
					if (!Object.values(patterns).some((p)=>!!hexColor.match(p))) {
						throw `color not in hex format for '${name}' on index ${index}`;
					}

					// remove alpha
					hexColor = {
						[!!hexColor.match(patterns.hex3a)]: hexColor.substring(0, 4),
						[!!hexColor.match(patterns.hex6a)]: hexColor.substring(0, 7)
					}[true] || hexColor

					index++;
					return { name, hexColor }
				});

				commit('colors', colors);
			} catch (e) {
				console.log(e);
				throw e
			}
		},
		exportColors({ state }) {
			return JSON.stringify(state.colors, null,"\t")
				.replace(/\t\{\n\t+(".*?,)\n\t+(".*?)\n\t}/gm, "\t{ $1 $2 }");
		}
	}
});

function saveState(state) {
	console.log('saved state');
	localStorage.setItem(localStorageName, JSON.stringify(state));
}

function loadState() {
	const storedData = JSON.parse(localStorage.getItem(localStorageName));
	storedData && _.each(storedData, (v, k) =>
		_.has(store.state, k) ? store.commit(k, v) : _.unset(storedData, k)
	);
	!_.isMatch(store.state, storedData) && saveState(store.state);
}

loadState();

store.subscribe((mutation, state) => { saveState(state); })

export default store;