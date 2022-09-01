import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: false,
        themes: {
            dark: {
                primary: "#8C43FA",
                secondary: " #181735",
                error: "#FF5252",
                white: '#ffffff',
                info: "#7681AB",
                light: '#A59AAD',
                purple: "#6D205C",
                success: " #181735",
                dark: "#000000",
                indigo: "#D1154B",
                "primary--light": "rgba(247, 81, 22, 0.1)",
                "dark--light": "rgba(0, 0, 0, 0.1)",
            },
            light: {
                primary: "#8C43FA",
                secondary: " #181735",
                error: "#FF5252",
                info: "#7681AB",
                white: '#ffffff',
                light: '#A59AAD',
                purple: "#6D205C",
                success: " #181735",
                dark: "#000000",
                indigo: "#D1154B",
                "primary--light": "rgba(247, 81, 22, 0.1)",
                "dark--light": "rgba(0, 0, 0, 0.1)",
            },
        },
    },
});
