
export default {
    Query: {
        boop() {
            return "You've been booped";
        },
        resolutions() {
            return [
                {
                    _id: "boopy doop",
                    name: "Hehe you booped"
                },
                {
                    _id: "Derpy",
                    name: "Hehe you derped"
                },
            ];
        }
    }
};
