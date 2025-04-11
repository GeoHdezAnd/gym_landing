/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                playfair: ["Playfair Display", "serif"],
                inter: ["Inter", "sans-serif"],
                poppins: ["Poppins", "sans-serif"],
                logo: ['BungeeSpice', 'serif']
            },
            colors: {
                p1: "#ff7b00", // no se usa
                p2: "#ff9500",
                p3: "#ffaa00",
                p4: "#EAEDFF", // blanco
                p5: "#e5dedc", // gris
                s1: "#161a1d",
                s2: "#11151c",
                s3: "#0b090a",
                s4: "#f6aa1c",
                s5: "#836101",
                black: {
                    DEFAULT: "#000000",
                    100: "#0A0302",
                },
            },
            boxShadow: {
                100: "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 16px 24px rgba(0, 0, 0, 0.25), inset 0px 3px 6px #d23d3d",
                200: "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 16px 24px rgba(0, 0, 0, 0.25), inset 0px 4px 10px #ff3333",
                300: "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 16px 24px rgba(0, 0, 0, 0.25), inset 0px 3px 6px #e87370",
                400: "inset 0px 2px 4px 0 rgba(255, 255, 255, 0.05)",
                500: "0px 1px 8px rgba(214, 208, 208, 0.44), 5px -12px 30px rgba(197, 197, 197, 0.44)",
            },
            transitionProperty: {
                borderColor: "border-color",
            },
            spacing: {
                "1/5": "20%",
                "2/5": "40%",
                "3/5": "60%",
                "4/5": "80%",
                "3/20": "15%",
                "7/20": "35%",
                "9/20": "45%",
                "11/20": "55%",
                "13/20": "65%",
                "15/20": "75%",
                "17/20": "85%",
                "19/20": "95%",
                22: "88px",
                100: "100px",
                512: "512px",
                330: "330px",
                388: "388px",
                400: "400px",
                440: "440px",
                640: "640px",
                960: "960px",
                1230: "1230px",
            },
            zIndex: {
                1: "1",
                2: "2",
                4: "4",
            },
            lineHeight: {
                12: "48px",
            },
            borderRadius: {
                14: "14px",
                20: "20px",
                40: "40px",
                half: "50%",
                "7xl": "40px",
            },
            flex: {
                50: "0 0 50%",
                320: "1px 0 320px",
                300: "0 0 300px",
                540: "0 0 540px",
                280: "0 0 280px",
                256: "0 0 256px",
                100: "0 0 100%",
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: "1rem",
                    sm: "2rem",
                    lg: "4rem",
                    xl: "5rem",
                    "2xl": "6rem",
                },
            },
        },
    },
    plugins: [],
};
