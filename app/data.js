let templates = [
    {
        userId: "wDBPV3fjezOkzESUU4DlaDijrD53",
        uuid: "dc0b3670-b3df-4760-97cb-0973a196a9d9",
        name: "Cold Call",
        description: `Template used for day-to-day cold calls, with a focus on ATS.`,
        export: {
            mode: "clipboard",
            includeCallInfo: false,
            includePaths: true
        },
        nodes: [
            {
                type: "prompt",
                id: 0,
                text: "Hey ___, this is ___. I was told you were the person to speak with over hiring. do you have a minute to talk?",
                parents: [-1],
            },

            {
                type: "prompt",
                id: 1,
                text: `I want to clarify that I am not looking at filling a position myself. I work at a place called Eddy and we help ___ hire ___. A lot of 
                ___ I work with have had a hard time finding quality candidates and also have a hard time having them show up to the interviews. How are you handling that?`,
                parents: [-1],
            },

            {
                type: "folder",
                id: 2,
                name: "NOT struggling to hire",
                color: "#3D5C7E",
                parents: [-1],
            },

            {
                type: "folder",
                id: 3,
                name: "Candidates",
                color: "#BF616A",
                parents: [2],
            },

            {
                type: "prompt",
                id: 4,
                text: "How are you organizing the candidates that you do get?",
                parents: [3],
            },

            {
                type: "prompt",
                id: 5,
                text: "How much time is that taking you?",
                parents: [3],
            },

            {
                type: "folder",
                id: 6,
                name: "Payroll",
                color: "#BF616A",
                parents: [2],
            },

            {
                type: "prompt",
                id: 7,
                text: "How are you handling the payroll for them?",
                parents: [6],
            },

            {
                type: "prompt",
                id: 8,
                text: "What could you be doing with your time if payroll only took a few minutes for you?",
                parents: [6],
            },

            {
                type: "folder",
                id: 9,
                name: "Struggling to hire",
                color: "#3D5C7E",
                parents: [-1],
            },

            {
                type: "prompt",
                id: 10,
                text: "What part of the hiring process is the hardest?",
                parents: [9],
            },

            {
                type: "folder",
                id: 11,
                name: "Hiring is expensive",
                color: "#BF616A",
                parents: [9],
            },

            {
                type: "prompt",
                id: 12,
                text: "If you can't fix this, what happens?",
                parents: [11],
            },

            {
                type: "prompt",
                id: 13,
                text: "How is this affecting your business?",
                parents: [11],
            },

            {
                type: "prompt",
                id: 14,
                text: "What aspect of the hiring is costing the most for you? Is your time worth more?",
                parents: [11],
            },

            {
                type: "folder",
                id: 15,
                name: "Too small / Handled in-house",
                color: "#BF616A",
                parents: [9],
            },

            {
                type: "prompt",
                id: 16,
                text: "We focus on helping small businesses. How are you hiring as a small business?",
                parents: [15],
            },

            {
                type: "prompt",
                id: 17,
                text: "Are you typically hiring for at least one position per month?",
                parents: [15],
            },

            {
                type: "folder",
                id: 18,
                name: "Frequent hiring",
                color: "#A3BE8C",
                parents: [15],
            },

            {
                type: "prompt",
                id: 19,
                text: "How much is it costing you to maintain a job posting?",
                parents: [18],
            },

            {
                type: "folder",
                id: 20,
                name: "Infrequent hiring",
                color: "#A3BE8C",
                parents: [15],
            },

            {
                type: "prompt",
                id: 21,
                text: "How are you keeping track of the employees you already have?",
                parents: [20],
            },

            {
                type: "prompt",
                id: 22,
                text: "Are you doing your own payroll?",
                parents: [20],
            },

            {
                type: "folder",
                id: 23,
                name: "Not enough qualified candidates",
                color: "#BF616A",
                parents: [9],
            },

            {
                type: "prompt",
                id: 24,
                text: "How are you posting the job?",
                parents: [23],
            },

            {
                type: "prompt",
                id: 25,
                text: "How quickly are you responding to the candidate?",
                parents: [23],
            },

            {
                type: "prompt",
                id: 26,
                text: "How does not having that position filled affect you and the other employees?",
                parents: [23],
            },

            {
                type: "folder",
                id: 27,
                name: "Too many candidates",
                color: "#BF616A",
                parents: [9],
            },

            {
                type: "prompt",
                id: 28,
                text: "How are you filtering through the candidates that you are getting?",
                parents: [27],
            },

            {
                type: "prompt",
                id: 29,
                text: "What would be a better use of your time, in place of talking with so many unqualified candidates?",
                parents: [27],
            },

            {
                type: "prompt",
                id: 30,
                text: "Have you had a hard time having the ones that you do try to interview show up?",
                parents: [27],
            },

            {
                type: "folder",
                id: 31,
                name: "We use paper",
                color: "#BF616A",
                parents: [9],
            },

            {
                type: "prompt",
                id: 32,
                text: "How are you typically finding candidates?",
                parents: [31],
            },

            {
                type: "prompt",
                id: 33,
                text: "How do you filter through the better candidates?",
                parents: [31],
            },

            {
                type: "prompt",
                id: 34,
                text: "How long does it typically take for you to contact the candidates?",
                parents: [31],
            },

            {
                type: "folder",
                id: 35,
                name: "We have tried everything",
                color: "#BF616A",
                parents: [9],
            },

            {
                type: "prompt",
                id: 36,
                text: "Would you be open to seeing a different approach?",
                parents: [35],
            },

            {
                type: "prompt",
                id: 37,
                text: "Why do you think nothing is working?",
                parents: [35],
            },

            {
                type: "folder",
                id: 38,
                name: "Not enough time",
                color: "#BF616A",
                parents: [9],
            },

            {
                type: "prompt",
                id: 39,
                text: "How much time do you spend on hiring?",
                parents: [38],
            },

            {
                type: "prompt",
                id: 40,
                text: "How much time do you think you would need to spend to get the quality people?",
                parents: [38],
            },

            {
                type: "prompt",
                id: 41,
                text: "Are you open to saving 2 - 10 hours a week?",
                parents: [38],
            }
        ],
    },

    {
        userId: "wDBPV3fjezOkzESUU4DlaDijrD53",
        uuid: "816f744f-9150-4269-80a5-2f9118c3a592",
        name: "NetGain Call",
        description: `New test template for Mr. Peeples`,
        export: {
            mode: "clipboard",
            includeCallInfo: false,
            includePaths: false,
        },
        nodes: [

        ],
    },

    {
        userId: "wDBPV3fjezOkzESUU4DlaDijrD53",
        uuid: "77bb2375-8ed4-4546-9b6b-5201df5abc9d",
        name: "Movie Trivia",
        description: `Template used for asking about everything
         there is to know about movies, with a specific focus
          on big series of movies, like Star Wars.`,
        export: {
            mode: "clipboard",
            includeCallInfo: false,
            includePaths: true
        },
        nodes: [
            {
                type: "folder",
                id: 0,
                name: "Star Wars",
                color: "#BC2828",
                parents: [-1, 7],
            },

            {
                type: "folder",
                id: 1,
                name: "The Phantom Menace",
                color: "#7326AF",
                parents: [0],
            },

            {
                type: "prompt",
                id: 2,
                text: "How did Anakin turn bad?",
                parents: [1],
            },

            {
                type: "prompt",
                id: 3,
                text: "Why does Anakin like Padme?",
                parents: [1],
            },

            {
                type: "prompt",
                id: 4,
                text: "Why is obiwan so quiet?",
                parents: [1],
            },

            {
                type: "folder",
                id: 5,
                name: "The Force Awakens",
                color: "#7326AF",
                parents: [0],
            },

            {
                type: "prompt",
                id: 6,
                text: "Who are Rey's parents?",
                parents: [5],
            },

            {
                type: "folder",
                id: 7,
                name: "Palpatine",
                color: "#D7A21A",
                parents: [1, 5],
            },

            {
                type: "prompt",
                id: 8,
                text: "How did Darth Sidious live?",
                parents: [7],
            },

            {
                type: "folder",
                id: 9,
                name: "Lord of the Rings",
                color: "#BC2828",
                parents: [-1],
            },

            {
                type: "folder",
                id: 10,
                name: "Empty Folder",
                color: "#7326AF",
                parents: [9],
            },
            
            {
                type: "prompt",
                id: 11,
                text: "How many books are in the LotR series?",
                parents: [9],
            },

            {
                type: "prompt",
                id: 12,
                text: "How is Legolas' hair so good?",
                parents: [9],
            },

            {
                type: "prompt",
                id: 13,
                text: "Top level tree prompt 1?",
                parents: [-1],
            },

            {
                type: "prompt",
                id: 14,
                text: "Top level tree prompt 2?",
                parents: [-1],
            },
        ],
    },
]

export function getAllTemplates(){
    return templates;
}

export function getTemplateByUUID(uuid){
    return templates.find((template) => (template.uuid === uuid));
}