// THIS IS A DEVELOPER VERSION OF BLOOKWARE, PLEASE DO NOT EXECUTE THIS VERSION!
console.log("Blookware v1.2.1")
console.log("Loading libraries...")
// All functions of the hacked client
function blookrush_setblooks() {
    (async () => {
        let n = document.createElement('iframe');
        document.body.append(n);
        window.alert = n.contentWindow.alert.bind(window);
        window.prompt = n.contentWindow.prompt.bind(window);
        window.confirm = n.contentWindow.confirm.bind(window);
        n.remove();
                function reactHandler() {
                    return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
                };
    
                if (window.location.pathname != '/play/rush') {
                    alert('You must be in a blook rush game mode to use this hack!');
                } else {
                    let e = reactHandler();
                    e.stateNode.props.firebase.setVal({
                        id: e.stateNode.props.client.hostId,
                        path: 'c/' + e.stateNode.props.client.name + '/bs',
                        val: Number(parseFloat(prompt('How many blooks do you want?')))
                    });
    
                    alert('Blooks set!');
                };
    })();
}
function blookrush_setdefense() {
    (async () => {
        let n = document.createElement('iframe');
        document.body.append(n);
        window.alert = n.contentWindow.alert.bind(window);
        window.prompt = n.contentWindow.prompt.bind(window);
        window.confirm = n.contentWindow.confirm.bind(window);
        n.remove();
                function reactHandler() {
                    return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
                };
    
                if (window.location.pathname != '/play/rush') {
                    alert('You must be in a blook rush game mode to use this hack!');
                } else {
                    let e = reactHandler();
                    e.stateNode.props.firebase.setVal({
                        id: e.stateNode.props.client.hostId,
                        path: 'c/' + e.stateNode.props.client.name + '/d',
                        val: Number(parseFloat(prompt('How much defense do you want?')))
                    });
    
                    alert('Defense set!');
                };
    })();
}
function cafe_infinitefood() {
    (async () => {
        let n = document.createElement('iframe');
        document.body.append(n);
        window.alert = n.contentWindow.alert.bind(window);
        window.prompt = n.contentWindow.prompt.bind(window);
        window.confirm = n.contentWindow.confirm.bind(window);
        n.remove();
                function reactHandler() {
                    return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
                };
    
                if (document.location.pathname != "/cafe") {
                    alert("You must be in a cafe game!");
                } else {
                    reactHandler().stateNode.state.foods.forEach(e => e.stock = 99999);
                    reactHandler().stateNode.forceUpdate();
    
                    alert('Added infinite food level!');
                }
    })();
}
function cafe_setcash() {
    (async () => {
        let n = document.createElement('iframe');
        document.body.append(n);
        window.alert = n.contentWindow.alert.bind(window);
        window.prompt = n.contentWindow.prompt.bind(window);
        window.confirm = n.contentWindow.confirm.bind(window);
        n.remove();
                function reactHandler() {
                    return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
                };

                if (document.location.pathname != "/cafe") {
                    alert("You must be in a cafe game!");
                } else {
                    reactHandler().stateNode.setState({ cafeCash: Number(parseFloat(prompt('How much cash would you like?'))) });


                    alert('Added cash!');
                };
    })();
}
function crazykingdom_maxstats() {
    (async () => {
        let n = document.createElement('iframe');
        document.body.append(n);
        window.alert = n.contentWindow.alert.bind(window);
        window.prompt = n.contentWindow.prompt.bind(window);
        window.confirm = n.contentWindow.confirm.bind(window);
        n.remove();
                function reactHandler() {
                    return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
                };
            
                if (window.location.pathname != '/kingdom') {
                    alert('You must be in a crazy kingdom game!');
                } else {
                    reactHandler().stateNode.setState({ materials: 100, people: 100, happiness: 100, gold: 100 });
            
                    alert('max stats set!');
                };
    })();    
}
function crazykingdom_setguests() {
    (async () => {
        let n = document.createElement('iframe');
        document.body.append(n);
        window.alert = n.contentWindow.alert.bind(window);
        window.prompt = n.contentWindow.prompt.bind(window);
        window.confirm = n.contentWindow.confirm.bind(window);
        n.remove();
                function reactHandler() {
                    return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
                };
            
                if (window.location.pathname != '/kingdom') {
                    alert('You must be in a crazy kingdom game!');
                } else {
                    let guestScore = Number(parseFloat(prompt('How many guests do you want?')));
                    reactHandler().stateNode.setState({ guestScore });
            
                    alert('Guests set!');
                };
    })();
}
function crazykingdom_skipguest() {
    (async () => {
        let n = document.createElement('iframe');
        document.body.append(n);
        window.alert = n.contentWindow.alert.bind(window);
        window.prompt = n.contentWindow.prompt.bind(window);
        window.confirm = n.contentWindow.confirm.bind(window);
        n.remove();
                function reactHandler() {
                    return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
                };
    
                if (window.location.pathname != '/kingdom') {
                    alert('You must be in a crazy kingdom game!');
                } else {
                    reactHandler().stateNode.nextGuest();
    
                    alert('Guest skipped!');
                };
    })();
}
function cryptohack_setcrypto() {
    (async () => {
        let n = document.createElement('iframe');
        document.body.append(n);
        window.alert = n.contentWindow.alert.bind(window);
        window.prompt = n.contentWindow.prompt.bind(window);
        window.confirm = n.contentWindow.confirm.bind(window);
        n.remove();
                function reactHandler() {
                    return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
                };
            
                if (window.location.pathname != '/play/hack') {
                    alert('You must be in a crypto hack game mode to use this hack!');
                } else {
                    let amount = Number(parseFloat(prompt('How much crypto do you want?')));
                    reactHandler().stateNode.setState({ crypto2: amount, crypto: amount });
            
                    alert('Crypto added!');
                };
    })();
}
function fishingfrenzy_setlure() {
    (async () => {
        let n = document.createElement('iframe');
        document.body.append(n);
        window.alert = n.contentWindow.alert.bind(window);
        window.prompt = n.contentWindow.prompt.bind(window);
        window.confirm = n.contentWindow.confirm.bind(window);
        n.remove();
                function reactHandler() {
                    return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
                };
            
                if (window.location.pathname != '/play/fishing') {
                    alert('You must be in a fishing frenzy game!');
                } else {
                    let lure = Number(parseFloat(prompt('What do you want to set your lure to? (1 - 5)'))) - 1;
                    reactHandler().stateNode.setState({ lure: lure < 0 ? 0 : lure > 4 ? 4 : lure });
            
                    alert('Lure set!');
                };
    })();
}
function fishingfrenzy_setweight() {
    (async () => {
        let n = document.createElement('iframe');
        document.body.append(n);
        window.alert = n.contentWindow.alert.bind(window);
        window.prompt = n.contentWindow.prompt.bind(window);
        window.confirm = n.contentWindow.confirm.bind(window);
        n.remove();
                function reactHandler() {
                    return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
                };
            
                if (window.location.pathname != '/play/fishing') {
                    alert('You must be in a fishing frenzy game!');
                } else {
                    let weight = Number(parseFloat(prompt('How much weight do you want?')));
                    reactHandler().stateNode.setState({ weight2: weight, weight });
            
                    alert('Weight set!');
                };
    })();    
}
function globalstats_addtokens() {
    (async () => {
        let n = document.createElement('iframe');
        document.body.append(n);
        window.alert = n.contentWindow.alert.bind(window);
        window.prompt = n.contentWindow.prompt.bind(window);
        window.confirm = n.contentWindow.confirm.bind(window);
        n.remove();
    
        var getValues = () => new Promise((e, t) => {
            try {
                let n = window.webpackJsonp.map(e => Object.keys(e[1]).map(t => e[1][t])).reduce((e, t) => [...e, ...t], []).find(e => /\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/.test(e.toString()) && /\(new TextEncoder\)\.encode\(\"(.+?)\"\)/.test(e.toString())).toString();
                e({
                    blooketBuild: n.match(/\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/)[0],
                    secret: n.match(/\(new TextEncoder\)\.encode\(\"(.+?)\"\)/)[1]
                })
            } catch {
                t("Could not fetch auth details")
            }
        })
        var encodeValues = async (e, t) => {
            let d = window.crypto.getRandomValues(new Uint8Array(12));
            return window.btoa(Array.from(d).map(e => String.fromCharCode(e)).join("") + Array.from(new Uint8Array(await window.crypto.subtle.encrypt({
                name: "AES-GCM",
                iv: d
            }, await window.crypto.subtle.importKey("raw", await window.crypto.subtle.digest("SHA-256", (new TextEncoder).encode(t)), {
                name: "AES-GCM"
            }, !1, ["encrypt"]), (new TextEncoder).encode(JSON.stringify(e))))).map(e => String.fromCharCode(e)).join(""))
        };
                fetch("https://api.blooket.com/api/users", { credentials: "include" }).then(x => x.json()).then(x => {
                    getValues().then(async e => {
                        fetch("https://api.blooket.com/api/users/add-rewards", {
                            method: "put",
                            credentials: "include",
                            headers: {
                                "content-type": "application/json",
                                "X-Blooket-Build": e.blooketBuild
                            },
                            body: await encodeValues({
                                name: x.name,
                                addedTokens: 500,
                                addedXp: 300
                            }, e.secret)
                        });
                        fetch("https://api.blooket.com/api/users/add-rewards", {
                            method: "put",
                            credentials: "include",
                            headers: {
                                "content-type": "application/json",
                                "X-Blooket-Build": e.blooketBuild
                            },
                            body: await encodeValues({
                                name: x.name,
                                addedTokens: 500,
                                addedXp: 300
                            }, e.secret)
                        }).then(() => alert('Added daily rewards!')).catch(() => alert('There was an error when adding rewards!'));;
                    }).catch(() => alert('There was an error encoding requests!'));
                }).catch(() => alert('There was an error getting username!'));
    })();
}
function globalstats_unlockallblooks() {
    (async () => {
        let n = document.createElement('iframe');
        document.body.append(n);
        window.alert = n.contentWindow.alert.bind(window);
        window.prompt = n.contentWindow.prompt.bind(window);
        window.confirm = n.contentWindow.confirm.bind(window);
        n.remove();
                function reactHandler() {
                    return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
                };
    
                if (!window.location.pathname.split('/').includes('lobby')) return alert('You must be in a game lobby! (e.g. https://www.blooket.com/play/lobby)');
    
                reactHandler().stateNode.setState({ lockedBlooks: [], takenBlooks: [] });
                alert('Blooks unlocked!');
    })();    
}
function globalstats_selldupeblooks() {
    (async () => {
        let n = document.createElement('iframe');
        document.body.append(n);
        window.alert = n.contentWindow.alert.bind(window);
        window.prompt = n.contentWindow.prompt.bind(window);
        window.confirm = n.contentWindow.confirm.bind(window);
        n.remove();
    
        var getValues = () => new Promise((e, t) => {
            try {
                let n = window.webpackJsonp.map(e => Object.keys(e[1]).map(t => e[1][t])).reduce((e, t) => [...e, ...t], []).find(e => /\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/.test(e.toString()) && /\(new TextEncoder\)\.encode\(\"(.+?)\"\)/.test(e.toString())).toString();
                e({
                    blooketBuild: n.match(/\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/)[0],
                    secret: n.match(/\(new TextEncoder\)\.encode\(\"(.+?)\"\)/)[1]
                })
            } catch {
                t("Could not fetch auth details")
            }
        })
        var encodeValues = async (e, t) => {
            let d = window.crypto.getRandomValues(new Uint8Array(12));
            return window.btoa(Array.from(d).map(e => String.fromCharCode(e)).join("") + Array.from(new Uint8Array(await window.crypto.subtle.encrypt({
                name: "AES-GCM",
                iv: d
            }, await window.crypto.subtle.importKey("raw", await window.crypto.subtle.digest("SHA-256", (new TextEncoder).encode(t)), {
                name: "AES-GCM"
            }, !1, ["encrypt"]), (new TextEncoder).encode(JSON.stringify(e))))).map(e => String.fromCharCode(e)).join(""))
        };
                fetch("https://api.blooket.com/api/users", { credentials: "include" }).then(x => x.json()).then(x => {
                    let blooks = Object.entries(x.unlocks).map(x => [x[0], x[1] - 1]).filter(x => x[1] > 0);
                    let wait = ms => new Promise(r => setTimeout(r, ms));
                    getValues().then(async e => {
                        let error = false;
                        alert('Selling duplicate blooks, please wait');
                        for (let [blook, numSold] of blooks) {
                            fetch("https://api.blooket.com/api/users/sellblook", {
                                method: "put",
                                credentials: "include",
                                headers: {
                                    "content-type": "application/json",
                                    "X-Blooket-Build": e.blooketBuild
                                },
                                body: await encodeValues({
                                    name: x.name,
                                    blook,
                                    numSold
                                }, e.secret)
                            }).catch(() => { error = true });
                            await wait(750);
                            if (error) break;
                        }
                        alert(`Results:\n` + blooks.map((x) => `    ${x[1]} ${x[0]}`).join(`\n`));
                    }).catch(() => alert('There was an error encoding requests!'));
                }).catch(() => alert('There was an error getting user data!'));
    })();
}
function globalstats_spamopenboxes() {
    (async () => {
        let n = document.createElement('iframe');
        document.body.append(n);
        window.alert = n.contentWindow.alert.bind(window);
        window.prompt = n.contentWindow.prompt.bind(window);
        window.confirm = n.contentWindow.confirm.bind(window);
        n.remove();
    
        var getValues = () => new Promise((e, t) => {
            try {
                let n = window.webpackJsonp.map(e => Object.keys(e[1]).map(t => e[1][t])).reduce((e, t) => [...e, ...t], []).find(e => /\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/.test(e.toString()) && /\(new TextEncoder\)\.encode\(\"(.+?)\"\)/.test(e.toString())).toString();
                e({
                    blooketBuild: n.match(/\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/)[0],
                    secret: n.match(/\(new TextEncoder\)\.encode\(\"(.+?)\"\)/)[1]
                })
            } catch {
                t("Could not fetch auth details")
            }
        })
        var encodeValues = async (e, t) => {
            let d = window.crypto.getRandomValues(new Uint8Array(12));
            return window.btoa(Array.from(d).map(e => String.fromCharCode(e)).join("") + Array.from(new Uint8Array(await window.crypto.subtle.encrypt({
                name: "AES-GCM",
                iv: d
            }, await window.crypto.subtle.importKey("raw", await window.crypto.subtle.digest("SHA-256", (new TextEncoder).encode(t)), {
                name: "AES-GCM"
            }, !1, ["encrypt"]), (new TextEncoder).encode(JSON.stringify(e))))).map(e => String.fromCharCode(e)).join(""))
        };
                let box = prompt(`Which box do you want to open? (e.g. Space)`);
                let boxes = {
                    safari: 25,
                    aquatic: 20,
                    bot: 20,
                    space: 20,
                    breakfast: 15,
                    medieval: 15,
                    wonderland: 15,
                    dino: 25
                }
                if (!Object.keys(boxes).includes(box.toLowerCase())) return alert('I could not find that box!');
                let amount = prompt('How many boxes do you want to open?');
                fetch("https://api.blooket.com/api/users", { credentials: "include" }).then(x => x.json()).then(x => {
                    if (x.tokens < boxes[box.toLowerCase()] * amount) amount = Math.floor(x.tokens / boxes[box.toLowerCase()]);
                    if (!amount) return alert('You do not have enough tokens!');
                    let wait = ms => new Promise(r => setTimeout(r, ms));
                    getValues().then(async e => {
                        let error = false,
                            blooks = [];
                        for (let i = 0; i < amount; i++) {
                            fetch("https://api.blooket.com/api/users/unlockblook", {
                                method: "put",
                                credentials: "include",
                                headers: {
                                    "content-type": "application/json",
                                    "X-Blooket-Build": e.blooketBuild
                                },
                                body: await encodeValues({
                                    name: x.name,
                                    box: box.charAt(0).toUpperCase() + box.slice(1).toLowerCase()
                                }, e.secret)
                            }).then(async x => {
                                let blook = await x.json();
                                blooks.push(blook.unlockedBlook);
                                alert(`${blook.unlockedBlook} (${i + 1}/${amount})`);
                            }).catch(() => { error = true });
                            await wait(750);
                            if (error) break;
                        }
                        let count = {};
                        blooks.forEach(blook => { count[blook] = (count[blook] || 0) + 1 });
                        alert(`Results:\n` + Object.entries(count).map((x) => `    ${x[1]} ${x[0]}`).join(`\n`));
                    }).catch(() => alert('There was an error encoding requests!'));
                }).catch(() => alert('There was an error getting username!'));
    })();
}
function goldquest_chestesp() {
    (async () => {
        let n = document.createElement('iframe');
        document.body.append(n);
        window.alert = n.contentWindow.alert.bind(window);
        window.prompt = n.contentWindow.prompt.bind(window);
        window.confirm = n.contentWindow.confirm.bind(window);
        n.remove();
                if (window.location.pathname != '/play/gold') {
                    alert('You must be in a gold quest game!');
                } else {
                    alert('Chest ESP enabled');
    
                    interval = setInterval(() => {
                        if (window.location.pathname != '/play/gold') return clearInterval(interval);
    
                        data = Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner.stateNode.state;
    
                        if (data?.stage == 'prize') {
                            boxes = data.choices;
                            choiceDiv = document.querySelector("div[class*='arts__regularBody']")?.children[1];
                            if (!choiceDiv) return clearInterval(interval)
                            if (!document.querySelector("p[class*='chest-esp']")) boxes.forEach((box, i) => {
                                textElement = document.createElement('p');
                                textElement.className = "chest-esp";
                                textElement.innerText = box.text;
                                textElement.style = `text-align: center;
                                    font-size: 30px;
                                    color: white;
                                    font-family:Titan One;
                                    sans-serif;
                                    -webkit-user-select:none;
                                    -moz-user-select:none;
                                    -ms-user-select:none;
                                    user-select:none;
                                    border-color: black;
                                    margin-top: 200px;`
                                try { choiceDiv.children[i].appendChild(textElement); } catch (e) {
                                    if (confirm('An error occured, would you like to report this in the support discord server?')) {
                                        window.open('https://glizzers.xyz/discord');
                                    };
                                };
                            });
    
                            else boxes.forEach((box, i) => {
                                if (choiceDiv.children.length == 3 && choiceDiv.children[i].children[1].innerText != box.text) choiceDiv.children[i].children[1].innerText = box.text;
                            });
                        };
    
                        if (window.location.pathname != '/play/gold') clearInterval(interval)
    
                    }, 0);
                };
    })();
}
function goldquest_setgold() {
    (async () => {
        let n = document.createElement('iframe');
        document.body.append(n);
        window.alert = n.contentWindow.alert.bind(window);
        window.prompt = n.contentWindow.prompt.bind(window);
        window.confirm = n.contentWindow.confirm.bind(window);
        n.remove();
                function reactHandler() {
                    return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
                };
    
                if (window.location.pathname != '/play/gold') {
                    alert('You must be in a gold quest game!');
                } else {
                    let gold = Number(parseFloat(prompt('How much gold do you want?')));
                    reactHandler().stateNode.setState({ gold2: gold, gold });
    
                    alert('Gold added!');
                };
    })();
}
function goldquest_editotherplayergold() {
    (() => {
        let n = document.createElement('iframe');
        document.body.append(n);
        window.alert = n.contentWindow.alert.bind(window);
        window.prompt = n.contentWindow.prompt.bind(window);
        window.confirm = n.contentWindow.confirm.bind(window);
        n.remove();
    
        function reactHandler() {
            return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
        };
    
        if (window.location.pathname != '/play/gold') {
            alert('You must be in a gold quest game!');
        } else {
            let e = reactHandler(),
                player = prompt("Player name to set gold"),
                amount = Number(parseFloat(prompt("Amount to set gold to")));
            e.memoizedProps.firebase.setVal({
                id: e.memoizedProps.client.hostId,
                path: "c/" + e.memoizedProps.client.name,
                val: {
                    b: e.memoizedProps.client.blook,
                    g: e.stateNode.state.gold,
                    tat: player + ":swap:" + amount
                }
            })
            alert('Set gold for player:' + player + ' to ' + amount);
        };
    })();
}
function racing_instantwin() {
    (async () => {
        let n = document.createElement('iframe');
        document.body.append(n);
        window.alert = n.contentWindow.alert.bind(window);
        window.prompt = n.contentWindow.prompt.bind(window);
        window.confirm = n.contentWindow.confirm.bind(window);
        n.remove();
                function reactHandler() {
                    return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
                };
    
                if (window.location.pathname != '/play/racing') {
                    alert('You must be in a racing game!');
                } else {
                    reactHandler().stateNode.setState({ progress: reactHandler().stateNode.state.goalAmount });
                    setTimeout(() => {
                        try {
                            Array.from(document.body.querySelectorAll('div[class*="answerText"]')).filter(t => t.firstChild.innerHTML == reactHandler().memoizedState.question.correctAnswers[0])[0].click();
                        } catch {
                            try {
                                Array.from(document.body.querySelectorAll('div[class*="answerText"]')).filter(t => t.firstChild.innerHTML == reactHandler().memoizedProps.client.question.correctAnswers[0])[0].click();
                            } catch { };
                        };
                    }, 100);
                };
    })();    
}
function towerdefense_clearenemies() {
    (async () => {
        let n = document.createElement('iframe');
        document.body.append(n);
        window.alert = n.contentWindow.alert.bind(window);
        window.prompt = n.contentWindow.prompt.bind(window);
        window.confirm = n.contentWindow.confirm.bind(window);
        n.remove();
                function reactHandler() {
                    return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
                };
    
                if (window.location.pathname != '/defense') {
                    alert('You must be in a tower defense game!');
                } else {
                    reactHandler().stateNode.enemies = [];
    
                    alert('Enemies cleared!');
                };
    })();    
}
function towerdefense_maxtowerstats() {
    (async () => {
        let n = document.createElement('iframe');
        document.body.append(n);
        window.alert = n.contentWindow.alert.bind(window);
        window.prompt = n.contentWindow.prompt.bind(window);
        window.confirm = n.contentWindow.confirm.bind(window);
        n.remove();
                function reactHandler() {
                    return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
                };
    
                if (window.location.pathname != '/defense') {
                    alert('You must be in a Tower Defense game!');
                } else {
                    reactHandler().stateNode.towers.forEach(tower => {
                        tower.damage = 1e308;
                        tower.range = 1e308;
                        tower.level = 3;
                        tower.blastRadius = 1e308
                        tower.fullCd = 0;
                    });
    
                    alert('Maxed out towers!');
                };
    })();    
}
function towerdefense_setcash() {
    (async () => {
        let n = document.createElement('iframe');
        document.body.append(n);
        window.alert = n.contentWindow.alert.bind(window);
        window.prompt = n.contentWindow.prompt.bind(window);
        window.confirm = n.contentWindow.confirm.bind(window);
        n.remove();
                function reactHandler() {
                    return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
                };
            
                if (window.location.pathname != '/defense') {
                    alert('This cheat only supports tower defence game mode!')
                } else {
                    let tokens = Number(parseFloat(prompt('How many tokens do you want?')));
                    reactHandler().stateNode.setState({ tokens });
            
                    alert('Tokens set!');
                };
    })();    
}
function towerofdoom_lowerenemystats() {
    (async () => {
        let n = document.createElement('iframe');
        document.body.append(n);
        window.alert = n.contentWindow.alert.bind(window);
        window.prompt = n.contentWindow.prompt.bind(window);
        window.confirm = n.contentWindow.confirm.bind(window);
        n.remove();
                function reactHandler() {
                    return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
                };
            
                if (window.location.pathname == '/tower/battle' || window.location.pathname == '/tower/start') {
                    let data = reactHandler().stateNode.state;
                    if (data.phase != 'select') return alert('You must be on the attribute selection page!');
                    reactHandler().stateNode.setState({ enemyCard: { ...data.enemyCard, strength: 0, charisma: 0, wisdom: 0 } })
            
                    alert('Enemy stats lowered!')
                } else {
                    alert('You must be in a tower of doom game!');
                };
    })();
}
function towerofdoom_maxplayerstats() {
    (async () => {
        let n = document.createElement('iframe');
        document.body.append(n);
        window.alert = n.contentWindow.alert.bind(window);
        window.prompt = n.contentWindow.prompt.bind(window);
        window.confirm = n.contentWindow.confirm.bind(window);
        n.remove();
                function reactHandler() {
                    return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
                };
            
                if (window.location.pathname == '/tower/battle' || window.location.pathname == '/tower/start') {
                    let data = reactHandler().stateNode.state;
                    if (data.phase != 'select') return alert('You must use this hack while you are starting a match or in one!');
                    reactHandler().stateNode.setState({ myCard: { ...data.myCard, strength: 100, charisma: 100, wisdom: 100 } })
            
                    alert('Done!')
                } else {
                    alert('You must be in a Tower of Doom game!');
                };
    })();
}
function towerofdoom_setcoins() {
    (async () => {
        let n = document.createElement('iframe');
        document.body.append(n);
        window.alert = n.contentWindow.alert.bind(window);
        window.prompt = n.contentWindow.prompt.bind(window);
        window.confirm = n.contentWindow.confirm.bind(window);
        n.remove();
                function reactHandler() {
                    return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
                };
            
                if (window.location.pathname == '/tower/battle' || window.location.pathname == '/tower/start' || window.location.pathname == '/tower/shop') {
                    try {
                        reactHandler().stateNode.props.setTowerCoins(Number(parseFloat(prompt('How many coins do you want?'))));
            
                        alert('Coins added!')
                    } catch { }
                } else {
                    alert('You must be in a tower of doom game!');
                };
    })();
}
function blookware_help() {
    console.log("Blookware Help Menu")
    console.log("Blookware version 1.2.1")
    console.log("Developer: Alex Flax (AviaAlex on GitHub)")
    console.log("Blookware is a command-line operated Blooket hack library made with JavaScript.")
    console.log("-------------------------------------------------")
    console.log("Games supported:")
    console.log("Blook Rush\nCafe\nCrazy Kingdom\nCrypto Hack\nFishing Frenzy\nGold Quest\nRacing\nTower Defense 1\nTower of Doom")
    console.log("To run the game, type the game name, (i.e cryptohack) with an underscore (_) followed by the hack name.\nYour browser's console should autocomplete it for you.\nExample: cryptohack_setcrypto()")
}
function blookware_updatepage() {
    window.location.replace("http://github.com/AviaAlex/blookware")
}
console.log("All libraries loaded!")
console.log("Blookware finished loading.")