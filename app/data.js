let templates = [
    // {
    //     userId: "wDBPV3fjezOkzESUU4DlaDijrD53",
    //     uuid: "dc0b3670-b3df-4760-97cb-0973a196a9d9",
    //     name: "Cold Call",
    //     description: `Template used for day-to-day cold calls, with a focus on ATS.`,
    //     export: {
    //         mode: "clipboard",
    //         includeCallInfo: false,
    //         includePaths: true
    //     },
    //     nodes: [
    //         {
    //             type: "prompt",
    //             id: 0,
    //             text: "Hey ___, this is ___. I was told you were the person to speak with over hiring. do you have a minute to talk?",
    //             parents: [-1],
    //         },

    //         {
    //             type: "prompt",
    //             id: 1,
    //             text: `I want to clarify that I am not looking at filling a position myself. I work at a place called Eddy and we help ___ hire ___. A lot of 
    //             ___ I work with have had a hard time finding quality candidates and also have a hard time having them show up to the interviews. How are you handling that?`,
    //             parents: [-1],
    //         },

    //         {
    //             type: "folder",
    //             id: 2,
    //             name: "NOT struggling to hire",
    //             color: "#3D5C7E",
    //             parents: [-1],
    //         },

    //         {
    //             type: "folder",
    //             id: 3,
    //             name: "Candidates",
    //             color: "#BF616A",
    //             parents: [2],
    //         },

    //         {
    //             type: "prompt",
    //             id: 4,
    //             text: "How are you organizing the candidates that you do get?",
    //             parents: [3],
    //         },

    //         {
    //             type: "prompt",
    //             id: 5,
    //             text: "How much time is that taking you?",
    //             parents: [3],
    //         },

    //         {
    //             type: "folder",
    //             id: 6,
    //             name: "Payroll",
    //             color: "#BF616A",
    //             parents: [2],
    //         },

    //         {
    //             type: "prompt",
    //             id: 7,
    //             text: "How are you handling the payroll for them?",
    //             parents: [6],
    //         },

    //         {
    //             type: "prompt",
    //             id: 8,
    //             text: "What could you be doing with your time if payroll only took a few minutes for you?",
    //             parents: [6],
    //         },

    //         {
    //             type: "folder",
    //             id: 9,
    //             name: "Struggling to hire",
    //             color: "#3D5C7E",
    //             parents: [-1],
    //         },

    //         {
    //             type: "prompt",
    //             id: 10,
    //             text: "What part of the hiring process is the hardest?",
    //             parents: [9],
    //         },

    //         {
    //             type: "folder",
    //             id: 11,
    //             name: "Hiring is expensive",
    //             color: "#BF616A",
    //             parents: [9],
    //         },

    //         {
    //             type: "prompt",
    //             id: 12,
    //             text: "If you can't fix this, what happens?",
    //             parents: [11],
    //         },

    //         {
    //             type: "prompt",
    //             id: 13,
    //             text: "How is this affecting your business?",
    //             parents: [11],
    //         },

    //         {
    //             type: "prompt",
    //             id: 14,
    //             text: "What aspect of the hiring is costing the most for you? Is your time worth more?",
    //             parents: [11],
    //         },

    //         {
    //             type: "folder",
    //             id: 15,
    //             name: "Too small / Handled in-house",
    //             color: "#BF616A",
    //             parents: [9],
    //         },

    //         {
    //             type: "prompt",
    //             id: 16,
    //             text: "We focus on helping small businesses. How are you hiring as a small business?",
    //             parents: [15],
    //         },

    //         {
    //             type: "prompt",
    //             id: 17,
    //             text: "Are you typically hiring for at least one position per month?",
    //             parents: [15],
    //         },

    //         {
    //             type: "folder",
    //             id: 18,
    //             name: "Frequent hiring",
    //             color: "#A3BE8C",
    //             parents: [15],
    //         },

    //         {
    //             type: "prompt",
    //             id: 19,
    //             text: "How much is it costing you to maintain a job posting?",
    //             parents: [18],
    //         },

    //         {
    //             type: "folder",
    //             id: 20,
    //             name: "Infrequent hiring",
    //             color: "#A3BE8C",
    //             parents: [15],
    //         },

    //         {
    //             type: "prompt",
    //             id: 21,
    //             text: "How are you keeping track of the employees you already have?",
    //             parents: [20],
    //         },

    //         {
    //             type: "prompt",
    //             id: 22,
    //             text: "Are you doing your own payroll?",
    //             parents: [20],
    //         },

    //         {
    //             type: "folder",
    //             id: 23,
    //             name: "Not enough qualified candidates",
    //             color: "#BF616A",
    //             parents: [9],
    //         },

    //         {
    //             type: "prompt",
    //             id: 24,
    //             text: "How are you posting the job?",
    //             parents: [23],
    //         },

    //         {
    //             type: "prompt",
    //             id: 25,
    //             text: "How quickly are you responding to the candidate?",
    //             parents: [23],
    //         },

    //         {
    //             type: "prompt",
    //             id: 26,
    //             text: "How does not having that position filled affect you and the other employees?",
    //             parents: [23],
    //         },

    //         {
    //             type: "folder",
    //             id: 27,
    //             name: "Too many candidates",
    //             color: "#BF616A",
    //             parents: [9],
    //         },

    //         {
    //             type: "prompt",
    //             id: 28,
    //             text: "How are you filtering through the candidates that you are getting?",
    //             parents: [27],
    //         },

    //         {
    //             type: "prompt",
    //             id: 29,
    //             text: "What would be a better use of your time, in place of talking with so many unqualified candidates?",
    //             parents: [27],
    //         },

    //         {
    //             type: "prompt",
    //             id: 30,
    //             text: "Have you had a hard time having the ones that you do try to interview show up?",
    //             parents: [27],
    //         },

    //         {
    //             type: "folder",
    //             id: 31,
    //             name: "We use paper",
    //             color: "#BF616A",
    //             parents: [9],
    //         },

    //         {
    //             type: "prompt",
    //             id: 32,
    //             text: "How are you typically finding candidates?",
    //             parents: [31],
    //         },

    //         {
    //             type: "prompt",
    //             id: 33,
    //             text: "How do you filter through the better candidates?",
    //             parents: [31],
    //         },

    //         {
    //             type: "prompt",
    //             id: 34,
    //             text: "How long does it typically take for you to contact the candidates?",
    //             parents: [31],
    //         },

    //         {
    //             type: "folder",
    //             id: 35,
    //             name: "We have tried everything",
    //             color: "#BF616A",
    //             parents: [9],
    //         },

    //         {
    //             type: "prompt",
    //             id: 36,
    //             text: "Would you be open to seeing a different approach?",
    //             parents: [35],
    //         },

    //         {
    //             type: "prompt",
    //             id: 37,
    //             text: "Why do you think nothing is working?",
    //             parents: [35],
    //         },

            // {
            //     type: "folder",
            //     id: 38,
            //     name: "Not enough time",
            //     color: "#BF616A",
            //     parents: [9],
            // },

            // {
            //     type: "prompt",
            //     id: 39,
            //     text: "How much time do you spend on hiring?",
            //     parents: [38],
            // },

    //         {
    //             type: "prompt",
    //             id: 40,
    //             text: "How much time do you think you would need to spend to get the quality people?",
    //             parents: [38],
    //         },

    //         {
    //             type: "prompt",
    //             id: 41,
    //             text: "Are you open to saving 2 - 10 hours a week?",
    //             parents: [38],
    //         }
    //     ],
    // },










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
            {
                type: "root",
                children: [0,20],
            },

            // NetClose
            {
                type: "folder",
                id: 0,
                name: "NetClose",
                color: "#BC2828",
                children: [1,2,4,5,7,9],
            },
            {
                type: "prompt",
                id: 1,
                text: "Hey, is ___ there?",
            },
            {
                type: "folder",
                id: 2,
                name: "Yes, GK picked up",
                color: "#BC2828",
                children: [3,9,42],
            },
            {
                type: "prompt",
                id: 3,
                text: "Can you transfer me to ___? This is Justin from NetGain.",
            },
            {
                type: "folder",
                id: 4,
                name: "No / They are busy",
                color: "#BC2828",
                children: [42],
            },
            {
                type: "folder",
                id: 5,
                name: "General VM",
                color: "#BC2828",
                children: [6],
            },
            {
                type: "prompt",
                id: 6,
                text: `Hello, this is ___ from NetGain, and I'm calling about our accounting automation tool. 
                I'm hoping to speak with ___ to discuss how we can streamline your accounting processes. If ___ 
                is available, please let me know the best way to reach them. Otherwise, could you please provide 
                me with their email address or direct phone number so that I can follow up with them directly? Thank 
                you for your time, and I look forward to speaking with ___ soon. My number is ___. Have a great day! `,
            },
            {
                type: "folder",
                id: 7,
                name: "Right person VM - NetClose",
                color: "#BC2828",
                children: [8],
            },
            {
                type: "prompt",
                id: 8,
                text: `Hi ___, this is ___ from Netgain.  You've probably seen us around, we are the group that provides 
                software to automate your accounting, for example we help with auto-reconciliations and task management 
                for the close process, and we're fully embedded in NetSuite.  If you're still thinking about how to best 
                close the books, you need an asset accounting SuiteApp, or even something to help with your lease compliance.
                 Give me a ring at [phone number].  Again, it's ___ at Netgain and the number is [phone number].  Thanks.`,
            },
            {
                type: "folder",
                id: 9,
                name: "Right Person",
                color: "#BC2828",
                children: [10,11,17,47,7],
            },
            {
                type: "prompt",
                id: 10,
                text: `Hey ___ this is ___ from Netgain, How's it going? Good deal.  You've probably seen us around.  We're
                 the group that provides accounting apps for NetSuite users like you guys.  Have you heard of us before?`,
            },
            {
                type: "folder",
                id: 11,
                name: "Yes",
                color: "#BC2828",
                children: [12,19,13,15,47],
            },
            {
                type: "prompt",
                id: 12,
                text: `Okay great.  Have you talked to one of us before? Well now we are helping a lot of companies save
                 time during their close process with things like Task Management and Auto-reconciliations.`,
            },
            {
                type: "folder",
                id: 13,
                name: "Yes",
                color: "#BC2828",
                children: [14,91,47],
            },
            {
                type: "prompt",
                id: 14,
                text: `Okay great.  Who have you looked at?  Oh ok, I'm very familiar with that system. What's nice about 
                Negain is we are built right inside NetSuite so everything is seamless so it's easy to use and easy to setup.
                 Plus, it connects all the way to the GL.`,
            },
            {
                type: "folder",
                id: 15,
                name: "No",
                color: "#BC2828",
                children: [16,91,47],
            },
            {
                type: "prompt",
                id: 16,
                text: `Okay, well that's where we come in. What's nice about Negain is we are built right inside NetSuite 
                so everything is seamless so it's easy to use and easy to setup. Plus, it connects all the way to the GL.`,
            },
            {
                type: "folder",
                id: 17,
                name: "No",
                color: "#BC2828",
                children: [18,19,13,15,47],
            },
            {
                type: "prompt",
                id: 18,
                text: `Oh, no problem.  We help companies automate their accounting close process with things like Task 
                Management and Auto-reconciliations.`,
            },
            {
                type: "prompt",
                id: 19,
                text: `If you don't mind me asking, have you looked at software tools to help you close the books?`,
            },

            // NetLease
            {
                type: "folder",
                id: 20,
                name: "NetLease",
                color: "#BC2828",
                children: [21,22,24,25,27,29],
            },
            {
                type: "prompt",
                id: 21,
                text: "Hey, is ___ there?",
            },
            {
                type: "folder",
                id: 22,
                name: "Yes, GK picked up",
                color: "#BC2828",
                children: [23,29,42],
            },
            {
                type: "prompt",
                id: 23,
                text: "Can you transfer me to ___, this is Justin from NetGain.",
            },
            {
                type: "folder",
                id: 24,
                name: "No / They are busy",
                color: "#BC2828",
                children: [42],
            },
            {
                type: "folder",
                id: 25,
                name: "General VM",
                color: "#BC2828",
                children: [26],
            },
            {
                type: "prompt",
                id: 26,
                text: `Hello, this is ___ from NetGain, and I'm calling about our accounting automation tool. I'm hoping to
                 speak with ___ to discuss how we can streamline your accounting processes. If ___ is available, please 
                 let me know the best way to reach them. Otherwise, could you please provide me with their email address 
                 or direct phone number so that I can follow up with them directly? Thank you for your time, and I look 
                 forward to speaking with ___ soon. My number is ___. Have a great day!`,
            },
            {
                type: "folder",
                id: 27,
                name: "Right Person VM - NetLease",
                color: "#BC2828",
                children: [28],
            },
            {
                type: "prompt",
                id: 28,
                text: `Hi ___, this is ___ from Netgain.  You've probably seen us around, we're the group that provides 
                accounting apps for NetSuite users like you, and we're fully embedded in NetSuite.  If you're still thinking 
                about how to best handle lease compliance with ASC 842, or need a close tool, or an asset accounting SuiteApp. 
                give me a ring at [phone number].  Again, it's ___ at Netgain and the number is [phone number].  Thanks.`,
            },
            {
                type: "folder",
                id: 29,
                name: "Right person",
                color: "#BC2828",
                children: [30,31,38,40,59,27],
            },
            {
                type: "prompt",
                id: 30,
                text: `Hey ___ this is ___ from Netgain, How's it going? Good deal.  You've probably seen us around. 
                We're the group that provides accounting apps for NetSuite users like you guys.  Have you heard of us before?`,
            },
            {
                type: "folder",
                id: 31,
                name: "Yes",
                color: "#BC2828",
                children: [32,33,34,36],
            },
            {
                type: "prompt",
                id: 32,
                text: `Okay great.  Have you talked to one of us before?  Well we provide software that automates accounting 
                processes.  For example, ASC 842 is the new lease accounting standard and we have a tool that automates compliance 
                and makes it really easy for you.`,
            },
            {
                type: "prompt",
                id: 33,
                text: "If you don't mind me asking, have you looked at software tools to help handle your leases?",
            },
            {
                type: "folder",
                id: 34,
                name: "Yes",
                color: "#BC2828",
                children: [35,91,59],
            },
            {
                type: "prompt",
                id: 35,
                text: `Okay great.  Who have you looked at?  Oh ok, I'm very familiar with that system. What's nice about NetGain
                 is we are built right inside NetSuite so everything is seamless so it's easy to use and easy to setup. Plus, it 
                 makes you compliant across all your leases and connects all the way to the GL.`,
            },
            {
                type: "folder",
                id: 36,
                name: "No",
                color: "#BC2828",
                children: [37,91,59],
            },
            {
                type: "prompt",
                id: 37,
                text: `Okay, well that's where we come in.  What's nice about Negain is we are built right inside NetSuite so 
                everything is seamless so it's easy to use and easy to setup. Plus, it makes you compliant across all your leases
                 and connects all the way to the GL.`,
            },
            {
                type: "folder",
                id: 38,
                name: "No - We don't have any leases",
                color: "#BC2828",
                children: [39],
            },
            {
                type: "prompt",
                id: 39,
                text: "Okay, sounds good. [Go into NetClose or NetAsset]",
            },
            {
                type: "folder",
                id: 40,
                name: "No",
                color: "#BC2828",
                children: [41,33,34,36],
            },
            {
                type: "prompt",
                id: 41,
                text: `Oh, no problem.  Well for example, ASC 842 is the new lease accounting standard and we have a tool that 
                automates compliance and makes it really easy to transition.`,
            },

            // Gatekeeper objection
            {
                type: "folder",
                id: 42,
                name: "Gatekeeper Objections",
                color: "#BC2828",
                children: [43,45],
            },
            {
                type: "folder",
                id: 43,
                name: "They are unavailable, can I take a message?",
                color: "#BC2828",
                children: [44],
            },
            {
                type: "prompt",
                id: 44,
                text: `Of course, thank you. My name is ___ from NetGain we are partners with NetSuite, and I'm calling about our
                 accounting tool. Could you please let ___ know that I called? Also, can I confirm the best way to reach them and
                 when might be a good time to follow up? Thank you very much for your assistance.`,
            },
            {
                type: "folder",
                id: 45,
                name: "What is this regarding?",
                color: "#BC2828",
                children: [46],
            },
            {
                type: "prompt",
                id: 46,
                text: `Sure, I'd be happy to provide more information. My name is ___ from NetGain we are partners with NetSuite, 
                and I'm calling about our accounting  tool. We help companies like ___ streamline their accounting process. I'm 
                hoping to discuss this further with ___. May I please know if ___ is available or the best way to reach them? I 
                appreciate your help and thank you in advance for your time.`,
                color: "#BC2828",
            },

            // NetClose Objections
            {
                type: "folder",
                id: 47,
                name: "NetClose Objections",
                color: "#BC2828",
                children: [48,49,51,53,55,57],
            },
            {
                type: "prompt",
                id: 48,
                text: "Some of my best customers use to ___, what they found was ___, so they decide to make the move to Netgain.",
            },
            {
                type: "folder",
                id: 49,
                name: "We already close the book very quickly / Our process is dialed in",
                color: "#BC2828",
                children: [50,47,91],
            },
            {
                type: "prompt",
                id: 50,
                text: `Oh ok, about how many days does it take you all to close the books? That's not to bad for just doing it your 
                self. What most of our customers have found is that with our tool we cut that time in half. Letting them put their 
                time and resources to more important work.`,
            },
            {
                type: "folder",
                id: 51,
                name: "Using a competitor's software",
                color: "#BC2828",
                children: [52,47,91],
            },
            {
                type: "prompt",
                id: 52,
                text: `Okay great.  If you don't mind me asking who are you using.  Yea, I'm familiar with them they do good work. Some
                 of my best customers used to use them, but they loved that NetClose was completely embedded in NetSuite and connected 
                 all the way to the GL . So they decided to make the switch.`,
            },
            {
                type: "folder",
                id: 53,
                name: "Not interested / Not looking for anything right now",
                color: "#BC2828",
                children: [54,47,91],
            },
            {
                type: "prompt",
                id: 54,
                text: `Some of my best customers weren't really shopping around for a close tool either, but once they saw how much time it
                 would save them in there close process, they decide to make the move to Netgain. Honestly ___ it doesn't hurt to just take 
                 a look.`,
            },
            {
                type: "folder",
                id: 55,
                name: "I don't utilize NetSuite",
                color: "#BC2828",
                children: [56,20,47,91],
            },
            {
                type: "prompt",
                id: 56,
                text: `Oh okay, I hear ya.  Just curious, what accounting system are you guys using?  Okay, we actually have a lot of 
                customers that use ___ and they love our lease accounting tool.`,
            },
            {
                type: "folder",
                id: 57,
                name: "We don't have the financials / Buying freeze",
                color: "#BC2828",
                children: [58,47,91],
            },
            {
                type: "prompt",
                id: 58,
                text: `Oh ok, some of my best customers were in the same situation. But especially with budget cuts, when they saw how 
                much time we cut off their close prosses which in turn saved them money, they had to give it a shot.`,
            },

            // NetLease Objections
            {
                type: "folder",
                id: 59,
                name: "NetLease Objections",
                color: "#BC2828",
                children: [60,61,63,65,67,69,76,78,80,83,85,87,89],
            },
            {
                type: "prompt",
                id: 60,
                text: "Some of my best customers use to ___, what they found was ___, so they decide to make the move to Netgain.",
            },
            {
                type: "folder",
                id: 61,
                name: "Too busy (no time to talk)",
                color: "#BC2828",
                children: [62,59,91],
            },
            {
                type: "prompt",
                id: 62,
                text: `Yeah, I hear ya, you're super busy.  That's what I'm hearing from most of my customers right now too.  What they've 
                found was that our leasing product is super easy to use and fast to setup.  Since the compliance deadline for the new 
                standard is upon us, what I recommend is to just take 15 minutes to see how it works….`,
            },
            {
                type: "folder",
                id: 63,
                name: "We've already got it figured out",
                color: "#BC2828",
                children: [64,59,91],
            },
            {
                type: "prompt",
                id: 64,
                text: "Okay great. Are you guys using spreadsheets or a software to be compliant?",
            },
            {
                type: "folder",
                id: 65,
                name: "Using a competitor's software",
                color: "#BC2828",
                children: [66,59,91],
            },
            {
                type: "prompt",
                id: 66,
                text: `Okay great.  If you don't mind me asking who are you using.  Yea, I'm familiar with them.  In fact, some of our 
                best customers used to use ___, what they found was ___ [refer to competitor doc] , so they decided to make the move to Netgain.`,
            },
            {
                type: "folder",
                id: 67,
                name: "Outsourcing the work or have hired consultants to do it.",
                color: "#BC2828",
                children: [68,59,91],
            },
            {
                type: "prompt",
                id: 68,
                text: `Some of my best customers started using or planned to use consultants.  What they found was that it was frankly more 
                expensive. With netgain, they could automate and save them money, and simply it is easier.`,
            },
            {
                type: "folder",
                id: 69,
                name: "Using excel",
                color: "#BC2828",
                children: [70,71],
            },
            {
                type: "prompt",
                id: 70,
                text: `Some of my best customers used to use excel.  What they found was that excel was usable when they just had a couple 
                leases, but once they had five or more, it broke down fast, so they decide to make the move to Netgain.`,
            },
            {
                type: "folder",
                id: 71,
                name: "Still not willing",
                color: "#BC2828",
                children: [72,73,75,59,91],
            },
            {
                type: "prompt",
                id: 72,
                text: `Half the problem our customers have found is not in the debits and credits, it's aggregating all the lease data 
                together for footnote disclosures. There's 5 or 6 new disclosures that you need to generate for your auditors.`,
            },
            {
                type: "prompt",
                id: 73,
                text: "(their first name), what are you doing to prepare for any unforeseen amendments to your leases? [disclosures]",
            },
            {
                type: "prompt",
                id: 75,
                text: `[Awesome.  What a lot of people who have done it themselves have done is just tested their work against our software
                     to make sure they're on track. It's really quick and easy to drop in a couple leases…]`,
            },
            {
                type: "folder",
                id: 76,
                name: "I'm the wrong person to talk about that",
                color: "#BC2828",
                children: [77,59,91],
            },
            {
                type: "prompt",
                id: 77,
                text: `Okay no problem.  Who do you recommend I connect with on this? Yeah we can absolutely loop (name) in, and we'll 
                definitely want to run it up the flagpole to them if you decide this is something that would benefit your team. But since 
                you're the one who's really in the weeds working on this stuff, I'd recommend you jumping on an informational demo to take
                 a look. If you don't like it, we won't waste (name)'s time. If you do, at that point we can run it up the flagpole.`,
            },
            {
                type: "folder",
                id: 78,
                name: "Budgeting concerns",
                color: "#BC2828",
                children: [79,59,91],
            },
            {
                type: "prompt",
                id: 79,
                text: `Some of my best customers were concerned about the cost too.  What they found was that we price based on volume so 
                it really fits into anyone's budget.`,
            },
            {
                type: "folder",
                id: 80,
                name: "Just send me an email",
                color: "#BC2828",
                children: [81,82,59,91],
            },
            {
                type: "prompt",
                id: 81,
                text: "Yeah, no problem.  What email should I send that to? [collect email address]",
            },
            {
                type: "prompt",
                id: 82,
                text: `Okay great. So (Their first name), what exactly are you looking for in an email? Ok perfect, I've found that it's 
                honestly easier just to hop on a 15 demo than thumb through info for an hour. Would that be helpful?`,
            },
            {
                type: "folder",
                id: 83,
                name: "Not interested",
                color: "#BC2828",
                children: [84,59,91],
            },
            {
                type: "prompt",
                id: 84,
                text: `Okay great so it sounds like you have it figured out and have complied. What solution did you use to comply? 
                (OR: How did you go about complying?)`,
            },
            {
                type: "folder",
                id: 85,
                name: "I don't utilize NetSuite",
                color: "#BC2828",
                children: [86,59,91],
            },
            {
                type: "prompt",
                id: 86,
                text: `Oh okay, I hear ya.  Just curious, what accounting system are you guys using?  Okay, we actually have a lot of customers
                 that use ___ and they love our lease accounting tool.`,
            },
            {
                type: "folder",
                id: 87,
                name: "Waiting till after audit",
                color: "#BC2828",
                children: [88,59,91],
            },
            {
                type: "prompt",
                id: 88,
                text: `Oh ok, I hear ya. Just curious, what year are you auditing right now? [If they say 2022].  Okay, in that case, ASC 842 
                is going to come up since it's material to your financial statements, what I'd suggest is just a 15-minute information call 
                that way when your auditors ask about what you have looked at for 842 you will be able to speak to it more clearly and at least 
                you'll know what's out there.`,
            },
            {
                type: "folder",
                id: 89,
                name: "We are just a small company",
                color: "#BC2828",
                children: [90,59,91],
            },
            {
                type: "prompt",
                id: 90,
                text: `Most accounting apps are very expensive, but we are built and priced for small businesses so they can have the same 
                tools as the large companies. What I'd recommend is hopping on a quick call so you can see how these might work for you.`,
            },

            // Close questions
            {
                type: "folder",
                id: 91,
                name: "Close Questions",
                color: "#BC2828",
                children: [92,101,103,47,59],
            },
            {
                type: "folder",
                id: 92,
                name: "The Main Close",
                color: "#BC2828",
                children: [93,94,95,99],
            },
            {
                type: "prompt",
                id: 93,
                text: `What I'd love to do is give you a quick look at how it works over a zoom call.  Then you can be the judge.  If you like 
                it, great.  If not, no big deal, but at least you'll know what's out there. I know today is pretty crazy, but would you have 
                15-20 minutes tomorrow or [the next day]?`,
            },
            {
                type: "prompt",
                id: 94,
                text: "Is morning or afternoon normally better? Which Date?",
            },
            {
                type: "folder",
                id: 95,
                name: "For NetLease",
                color: "#BC2828",
                children: [96,97,98],
            },
            {
                type: "prompt",
                id: 96,
                text: `Our product expert likes to prepare a demo that fits your situation.  To help with that can you tell me about how many 
                leases you have?`,
            },
            {
                type: "prompt",
                id: 97,
                text: `Just to recap, that walk-through is scheduled for (Time and Date) via zoom and I'll send you an email with a link you can
                 click on that allows you to see our screen. So just remember to open your email at that time and click on the link to join the
                 meeting.  What's the best email to send that to?`,
            },
            {
                type: "prompt",
                id: 98,
                text: "We send text message reminders as well.  What number should we shoot that text to?",
            },
            {
                type: "folder",
                id: 99,
                name: "For NetClose",
                color: "#BC2828",
                children: [100,97,98],
            },
            {
                type: "prompt",
                id: 100,
                text: `Our product expert likes to prepare a demo that fits your situation.  To help with that can you tell me about people are 
                helping to finalize the closing of your books?`,
            },
            {
                type: "folder",
                id: 101,
                name: "The Opposed Close",
                color: "#BC2828",
                children: [102,94,95,99],
            },
            {
                type: "prompt",
                id: 102,
                text: `(Their first Name), with your situation what I'd suggest is just hopping on a 15-minute information call, that way you 
                can see exactly what's out there. Would you be opposed to something like that?`,
            },
            {
                type: "folder",
                id: 103,
                name: "The Calendar Close",
                color: "#BC2828",
                children: [104,94,95,99],
            },
            {
                type: "prompt",
                id: 104,
                text: "Here let me grab my calendar if you want to grab yours and we can find a time that works, (Pause) Would that be helpful?",
            },
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
                type: "root",
                children: [0,9,13,14],
            },
            {
                type: "folder",
                id: 0,
                name: "Star Wars",
                color: "#BC2828",
                children: [1,5],
            },

            {
                type: "folder",
                id: 1,
                name: "The Phantom Menace",
                color: "#7326AF",
                children: [2,3,4,7],
            },

            {
                type: "prompt",
                id: 2,
                text: "How did Anakin turn bad?",
            },

            {
                type: "prompt",
                id: 3,
                text: "Why does Anakin like Padme?",
            },

            {
                type: "prompt",
                id: 4,
                text: "Why is obiwan so quiet?",
            },

            {
                type: "folder",
                id: 5,
                name: "The Force Awakens",
                color: "#7326AF",
                children: [6,7],
            },

            {
                type: "prompt",
                id: 6,
                text: "Who are Rey's parents?",
            },

            {
                type: "folder",
                id: 7,
                name: "Palpatine",
                color: "#D7A21A",
                children: [0,8],
            },

            {
                type: "prompt",
                id: 8,
                text: "How did Darth Sidious live?",
            },

            {
                type: "folder",
                id: 9,
                name: "Lord of the Rings",
                color: "#BC2828",
                children: [10,11,12],
            },

            {
                type: "folder",
                id: 10,
                name: "Empty Folder",
                color: "#7326AF",
                children: [],
            },
            
            {
                type: "prompt",
                id: 11,
                text: "How many books are in the LotR series?",
            },

            {
                type: "prompt",
                id: 12,
                text: "How is Legolas' hair so good?",
            },

            {
                type: "prompt",
                id: 13,
                text: "Top level tree prompt 1?",
            },

            {
                type: "prompt",
                id: 14,
                text: "Top level tree prompt 2?",
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