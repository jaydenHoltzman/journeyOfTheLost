function YouWakeUp(){
  var endGame = false;
  
  var gameStory = "<p>You wake up cold and alone in a strange forest.</p><p> A small river flows below the" +
                  " hill you now lay apon.</p><p> Flowing swiftly, the river appears to be carrying" +
                  " large oak trees, roots and all. You groggily stand up and search the insides" +
                  " of your pockets, revealing a colored map of some kingdom (You make a silent" +
                  " prayer to the Divines that it is the kingdom you now stand on.) as well as a" +
                  " broken compass, which shows the forest ahead of you to lead north.</p><p> In your" +
                  " back pocket sits a neatly folded piece of leather with a note etched on it.</p><p>" +
                  "</p><p>It reads :</p><p>" +
                  "OVER UNDER AND BACK AGAIN - TO FIND THE PEACE THAT LIES WITHIN - YOUR JOURNEY" +
                  " IS A PERILOUS ONE - FOR WHICH WE HOPE YOU MAKE IT DONE - FOR IF YOU FAIL A" +
                  "DARKNESS WILL GRASP - AND ALL THAT IS LIVING SHALL SOON PASS\n" +
                  "- TO THE CRYSTALLINE SPIRE YOU MUST GO</p><p>" +
                  "'What task has been laid before me?' you ask yourself.</p><p> You gather the map," +
                  " note, and compass and decide that the best start for this journey would be to......</p>";
  
  var gameStoryArea = document.getElementById("GameStoryArea");
  gameStoryArea.innerHTML = gameStory;
  
  var playerOptionsOne = "Head North Through The Forest";
  var playerOptionsTwo = "Follow The River";
  
  document.getElementById("PlayerOptionsTwo").style.visibility = 'visible';
  
  var playerOptionsAreaOne = document.getElementById("PlayerOptionsOne");
  var playerOptionsAreaTwo = document.getElementById("PlayerOptionsTwo");
  playerOptionsAreaOne.innerHTML = playerOptionsOne;
  playerOptionsAreaTwo.innerHTML = playerOptionsTwo;
  
  
  
  playerOptionsAreaOne.addEventListener('click', function(){
    if (playerOptionsAreaOne.innerHTML === "Head North Through The Forest"){
      gameStoryArea.innerHTML = "<p>Over the course of two moons, you finaly reach what appears to be a road.</p>" +
                                "<p>Looking at your map, this must be the west bend.</p><p>It bends west towards the" +
                                " city of Dussk, as well as heading east towards a fork leading straight to the" +
                                " Crystaline Spire.</p><p>Having to choose, you eventualy decide to go......";
      playerOptionsAreaOne.innerHTML = "West To Dussk";
      playerOptionsAreaTwo.innerHTML = "East Towards The Fork";
    }else if (playerOptionsAreaOne.innerHTML === "Go Behind The Troll To Dussk"){
      gameStoryArea.innerHTML = "<p>You reach the west bend and marvel at the sight of it, the grass fields blowing" +
                                " waving in the wind, flower petals being carried away towards Harreks Bay." +
                                " Small moles and meerkat's pop their heads above the tall grass and hoot to one another." +
                                " The smell of the sea waves over you, and under the smell lies another, yet far more foul.</p>" +
                                "<p>They spring from the grass onto the road weapons in hand and bow's drawn, the source" +
                                " of the rotten cheese smell, bandits.</p>" +
                                "<p>'Giv' uhs all ye got, er we whill dropp ye dead in tha road!' the large one with the" +
                                " beard yells as he steadys his grip upon his greatsword. The other man wields a dented sword and" +
                                " wooden box, which must be constituting as his shield, as the woman readys an arrow" +
                                " onto her bow string.</p><p> As you face adversity, you decide to......</p>";
      playerOptionsAreaOne.innerHTML = "Run";
      playerOptionsAreaTwo.innerHTML = "Show Them You Have Nothing";
    }else if (playerOptionsAreaOne.innerHTML === "Run"){
      gameStoryArea.innerHTML = "<p>You turn as quickly as you can and feel the earth scrap beneath you, that is as far" +
                                " as you go before you feel an arrow go through your leg.</p>" +
                                "<p>Falling down to earth bringing up dust in your fall, you reach down to feel the wound." +
                                " The three bandits walk over to you as you fumble at the arrow.</p>" +
                                "<p>'Gah! Shoddy work Mieera, dead men is easy'er to be loot'en than living ones.'</p>" +
                                "<p>The woman steps close to you and bends the string back pointed to your throat.</p>";
      playerOptionsAreaOne.innerHTML = "Try Again";
      document.getElementById("PlayerOptionsTwo").style.visibility = 'hidden'; 
    }else if (playerOptionsAreaOne.innerHTML === "Change The Route"){
      gameStoryArea.innerHTML = "<p>You make it out to Harreks Bay until someone relizes what had happened, knowing you to be" +
                                " the only other crew member to have stepped foot in his quarters, the captain calls you to the" +
                                " top deck.</p>" +
                                "<p>'You made one mistake,' he glares with one red and one yellow eye, 'and thats all it takes.'</p>" +
                                "<p>The captain orders for you to be held down as he ties a large anchor to your legs, proping the anchor" +
                                " on the Gunwale.</p>" +
                                "<p>'Goodbye.' he hisses with a swift kick, and after the pain from the strain upon your legs, you feel" +
                                " the cold of the bay sweep over you.</p>";
      playerOptionsAreaOne.innerHTML = "Try Again";
      document.getElementById("PlayerOptionsTwo").style.visibility = 'hidden'; 
    }else if (playerOptionsAreaOne.innerHTML === "Escape"){
      gameStoryArea.innerHTML = "<p>You wake up after blacking out on a part of the mast.</p><p> You float on a sandy beach," +
                                "green grass and trees in view. You clamber blindly forward to see a path within the forest.</p>" +
                                "<p>Freezing, wet, and tired, you decide to......</p>";
      playerOptionsAreaOne.innerHTML = "Sleep Upon The Beach";
      playerOptionsAreaTwo.innerHTML = "Head Towards The Path";
    }else if (playerOptionsAreaOne.innerHTML === "Sleep Upon The Beach"){
      gameStoryArea.innerHTML = "<p>You Die of Hypothermia.</p>";
      playerOptionsAreaOne.innerHTML = "Try Again";
      document.getElementById("PlayerOptionsTwo").style.visibility = 'hidden'; 
    }else if (playerOptionsAreaOne.innerHTML === "Run Past Ralor"){
      gameStoryArea.innerHTML = "<p>You Jump aside from Ralor's forward thrust and dash upon the bridge, you reach the" +
                                " top of its arch before you feel the gold of his blade rip through your now red shirt.</p><p> The" +
                                "knight lets pass a sigh, 'Do not create lies you can't make true!'</p>" +
                                "<p>The stones of the bridge greet your fall.</p>";
      playerOptionsAreaOne.innerHTML = "Try Again";
      document.getElementById("PlayerOptionsTwo").style.visibility = 'hidden'; 
    }else if (playerOptionsAreaOne.innerHTML === "Sail To Lake Dan"){
      gameStoryArea.innerHTML = "<p>You reach Gennii... or what remains.</p><p> The city is afire, smoke and ash clouding" +
                                " your vision. People rush from the city covered in soot. Women scream and reach for their" +
                                " lost homes, men grab their children in embrace. The source of the fire lies to the sky.</p>" +
                                "<p>Its skin smooth while pinned with arrows, its legs strong and clawed, its leather wings" +
                                " torn from age. An ice drake from the ShivverPeaks.</p><p>A young woman runs ahead of the" +
                                "clump of survivors, throwing aside those that stop her, 'My son!' she wails, 'My baby!'</p>" +
                                "<p>All anyone can hear is the creak and crack of burning wood. Yet you hear a cry answer the" +
                                "mother. You look upon the survivors and see no one stir.</p><p>You clench your hands and" +
                                "take a forward step......</p>";
      playerOptionsAreaOne.innerHTML = "To The Northern Winds";
      playerOptionsAreaTwo.innerHTML = "To Save The Child";
    }else if (playerOptionsAreaOne.innerHTML === "Sleep"){
      gameStoryArea.innerHTML = "<p>You lay upon the ash, silt collecting on you as you rest.</p><p>In front of you, the ash seems" +
                                "to collect in a form strange to your weary eyes,</p><p>yet you rest,</p><p>and you dream,</p><p>and you" +
                                " take the ashen figures arm through your chest.</p>";
      playerOptionsAreaOne.innerHTML = "Try Again";
      document.getElementById("PlayerOptionsTwo").style.visibility = 'hidden';
    }else if (playerOptionsAreaOne.innerHTML === "Go off The Path"){
      gameStoryArea.innerHTML = "<p>At the mirrage you reach down to grab what you already have in abundance.</p>" +
                                "<p>Sand.</p>" +
                                "<p>You swallow sand despite yourself.</p>";
      playerOptionsAreaOne.innerHTML = "Try Again";
      document.getElementById("PlayerOptionsTwo").style.visibility = 'hidden'; 
    }else if (playerOptionsAreaOne.innerHTML === "Turn Back"){
      gameStoryArea.innerHTML = "<p>You die of dehydration long before you ever catch a glimpse of Asstihi again.</p>";
      playerOptionsAreaOne.innerHTML = "Try Again";
      document.getElementById("PlayerOptionsTwo").style.visibility = 'hidden'; 
    }else if (playerOptionsAreaOne.innerHTML === "Go To The Metroid Sea"){
      gameStoryArea.innerHTML = "<p>The ship rocks back and forth in the dead of night, gulls can be heard flying over head," +
                                " yet you sleep peacefully with the sound of the waves lapping upon the boat.</p><p>All the noises" +
                                " drown out the small cackling that comes in ragid breaths from the boat handler, even the sound" +
                                "of his rusty knife unsheathing.</p>";
      playerOptionsAreaOne.innerHTML = "Try Again";
      document.getElementById("PlayerOptionsTwo").style.visibility = 'hidden'; 
    }else if (playerOptionsAreaOne.innerHTML === "North Following The West Bend"){
      gameStoryArea.innerHTML = "<p>Having crossed over the grassy meadow that makes up most of the Eastern-West" +
                                " Bend, having the sun in the sky and birds chirping in the tall grass, it was" +
                                " quite beautifull.</p><p>Until now.</p><p>One last fork lies ahead of you in the road. One" +
                                " leading North upon the Northern-Winds You See Snow build up and the peaks of" +
                                " icy mountain tops.</p><p>And the other to what must be the city of Gennii, yet is" +
                                " currently a smoke built spire on the horizon.</p><p>'Do I go the safe route north into" +
                                " the ill-prepared cold?' ,you ask yourself ' or to what could be my inevitable doom" +
                                " at the smoldering Gennii?'</p><p>You make your decision, and eventually head......</p>";
      playerOptionsAreaOne.innerHTML = "East To Gennii";
      playerOptionsAreaTwo.innerHTML = "To The Northern Winds";
    }else if (playerOptionsAreaOne.innerHTML === "Run Around The Beast"){
      gameStoryArea.innerHTML = "<p>You now trek onwards into the blizzard. Having lost all sight of" +
                                " the path, you have no idea what direction you are heading in. You also doubt" +
                                " you can last any longer in this freezing cold.</p><p>Your teeth continue to click" +
                                "together, your knees shaking. You need to find a way out of the blizzard, and" +
                                "fast.</p><p>What looks to be trees on the horizon are to your left, you end up going......</p>";
      playerOptionsAreaOne.innerHTML = "Keep Running Straight";
      playerOptionsAreaTwo.innerHTML = "Towards The Trees";
    }else if (playerOptionsAreaOne.innerHTML === "Keep Running Straight"){
      gameStoryArea.innerHTML = "<p>Large beasts covered in snowy fur, apple red eyes bouncing as they bound towards" +
                                " your body, frozen on the piling snow. The beast have been tracking you ever sence" +
                                " you had set foot in the ShivverPeaks.</p><p>They are hungry.</p><p>They are Determined.</p>" +
                                "<p>They do not waste a morsel.</p>";
      playerOptionsAreaOne.innerHTML = "Try Again";
      document.getElementById("PlayerOptionsTwo").style.visibility = 'hidden'; 
    }else if (playerOptionsAreaOne.innerHTML === "Ask For The Mans Assistance"){
      gameStoryArea.innerHTML = "<p>You approach the man and begin to explain your issue, and without a moments" +
                                " hesitation, the man grabs hold of the base of a tree.</p><p>Uprooting the tree with" +
                                " little effort, he flings it over the river, beckoning you to cross over. Once" +
                                " you have made it across, you look back to see him take a bounding leap over" +
                                " the river, his large smile still stuck to his face.</p><p>Upon reaching the other side," +
                                " the man sits you upon his shoulder and bolts towards the mountains.</p><p>The man" +
                                " reaches the top of the mountains while the sun is still in the sky, he kneels down to let" +
                                " you climb off of his shoulder. He then hands you a small leather bag with frosted" +
                                " cookies which he apeared to make himself, then laughs heartily his mustache" +
                                " bouncing, waves, then rides his shield down the face of the mountain.</p><p>The strange" +
                                " man has certainly given you a very large shortcut, in fact you can see the" +
                                " Crystalline Spire off in the distance. Your journey is nearly at its end.</p><p>The" +
                                " next step is to......</p>";
      playerOptionsAreaOne.innerHTML = "Go To Dark Rock";
      playerOptionsAreaTwo.innerHTML = "Try To Find The Path";
    }else if (playerOptionsAreaOne.innerHTML === "On The Path"){
      gameStoryArea.innerHTML = "<p>The Spire stands before you, illuminating the area bright purple as the sun's" +
                                " rays pass through the crystals that float at its peak. You hear humming from the" +
                                " top faint to the ear, yet what you make out sounds to be from multiple sources," +
                                " and not of a language that you know, yet still enticing</p><p>You edge towards the" +
                                " tower, but begin to question yourself.</p><p>You have no idea what will happen once" +
                                " you get there. In fact the only reason you are here at all is based on a small" +
                                " note found in your breeches after you had been passed out</p><p>Keeping in mind your" +
                                " journey so far, and the little you do know, you decide to......</p>";
      playerOptionsAreaOne.innerHTML = "Go Towards The Door";
      playerOptionsAreaTwo.innerHTML = "Sneak In Undercover Of Night";
    }else if (playerOptionsAreaOne.innerHTML === "Go To Dark Rock"){
      gameStoryArea.innerHTML = "<p>The town is burnt down, layered heavily in ash. You cough getting some in your throat.</p>" +
                                "<p>That was a mistake.</p>" +
                                "<p>Figures rise from the ashes, made from the ashes, awoken from your noise. They gently" +
                                " float towards you, a high pitched screech lifting the air, the swords that they carry" +
                                " look to be made of ash as well. However, when they past through you, blood still wells up...</p>";
      playerOptionsAreaOne.innerHTML = "Try Again";
      document.getElementById("PlayerOptionsTwo").style.visibility = 'hidden';
    }else if (playerOptionsAreaOne.innerHTML === "Go Towards The Door"){
      gameStoryArea.innerHTML = "<p>A suit of armor made from the same material as the crystals floating above stands gaurd" +
                                " over the door. The suit animates upon seeing you, and with suprising speed floats towards you.</p>" +
                                "<p>The suit lifts a heavy mace that catches the suns light, splaying pink light about you, blinding" +
                                " you before you could see the hard crystal crush into your skull.</p>";
      playerOptionsAreaOne.innerHTML = "Try Again";
      document.getElementById("PlayerOptionsTwo").style.visibility = 'hidden'; 
    }else if (playerOptionsAreaOne.innerHTML === "Go Inside"){
      gameStoryArea.innerHTML = "<p>THE TOWER SPEAKS, AND YOU MUST LISTEN - AND TIME ITSELF WILL GIVE YOU VISION</p>" +
                                "<p>THE PLACE YOU STAND IS LOST TO ALL - YET HERE YOU STAND AMONGST THEM ALL</p>" +
                                "<p>OVER UNDER AND BACK AGAIN - TO FIND THE PEACE THAT LIES WITHIN</p>" +
                                "<p>YOUR JOURNEY HAD BEEN DANGEROUS - YET YOU REMAIN VICTORIOUS</p>" +
                                "<p>YET WHAT YOUR TASK WAS REMAINS - YET ANOTHER BLOTTED STAIN</p>" +
                                "<p>AND STILL THE QUESTION EATS YOUR BRAIN - WHY IT IS THAT YOU REMAIN</p>" +
                                "<p>WHAT IS IT THAT YOU HAVE GAINED - FROM ALL OF YOUR PRESENT PAIN</p>" +
                                "<p>YOU ASK THESE QUESTIONS TO YOURSELF - AND FORGET YOU HAVE A MOUTH</p>";
      playerOptionsAreaOne.innerHTML = "\"I'm Confused!\"";
      playerOptionsAreaTwo.innerHTML = "\"Why Did I Come Here?\"";
    }else if (playerOptionsAreaOne.innerHTML === "\"I'm Confused!\""){
      gameStoryArea.innerHTML = "<p>WE SELDOM JOURNEY FAR FROM OUR PLACE - YET SOME HOW WE REMAIN IN SPACE</p>" +
                                "<p>WE LIVE WITHIN A DIFFRENT SPACE - A SPACE BETWEEN ALL OTHER PLACES</p>" +
                                "<p>A FIRE BURNS WITHIN OUR SPACE - MADE UP OF WHICH BY OUR RAGE</p>" +
                                "<p>THE FIRE BUILDS AS STARS FLICKER AWAY - YET THE FIRE KEEPS THE EVIL AWAY</p>" +
                                "<p>TO CLEANSE AND PURGE OUR TASK REMAINS - TO REMOVE ALL THAT LURKS AT BAY</p>" +
                                "<p>WE COME FOR JUSTICE AND LEAVE ONLY PAIN - AND NOW OUR FINAL TASK REMAINS</p>" +
                                "<p>YOU AND US CAN NOT LIVE AT PEACE - YET NEITHER SHAN'T YOU DIE WITHOUT OBEDIENCE</p>" +
                                "<p>WE OFFER YOU A BRIGHTER FUTURE - FOR WHICH YOU ANSWER TO OUR RULE</p>" +
                                "<p>YOUR LIFE SHALL ALWAYS BE THE SAME - WITH SMALL CHANGES REARRANGED</p>" +
                                "<p>YOU WILL MARRY, ADVENTURE, STAKE A CLAIM - YET ALL WILL BE FOR DUTYS SAKE</p>" +
                                "<p>YOU WILL KILL, LOVE, AND MAKE A FUTURE - BUT YOUR EMOTIONS WILL NEVER SHIFT</p>" +
                                "<p>CONTROL WILL BE TAKEN FROM YOUR HANDS - AND THRUST BEFORE YOUR MASTER LORDS</p>" +
                                "<p>THIS OFFER IS GIVEN BUT ONCE - OUR PATHS SHALL NEVER AGAIN PASS<p>";
      playerOptionsAreaOne.innerHTML = "\"What!\"";
      playerOptionsAreaTwo.innerHTML = "\"What?\"";
    }else if (playerOptionsAreaOne.innerHTML === "\"What!\""){
      gameStoryArea.innerHTML = "<p>WE WISH NOT FOR THIS TO BE A HARD CHOICE - OR THAT YOU ARE FRIGHTENED BY OUR VOICE</p>" +
                                "<p>JUST THAT YOU RELIZE THE THREAT THAT WE MAKE - WHILE YOU THINK OF WHATS AT STAKE</p>" +
                                "<p>NOT MANY HAVE BEEN GIVEN THIS CHOICE - ONE THAT WE HOPE YOU WILL REJOICE</p>" +
                                "<p>NO LONGER SHALL WE HOLD OUR BREATH - TO AWAIT YOUR POTENTIAL DEATH</p>" +
                                "<p>SO WHAT SAY YOU OF MUCH SKILL - ONE THAT REMAINS SILENT STILL</p>" +
                                "<p>TO STAND AND TAKE THE KNOWLEDGE THAT WE GIVE - BE WARY THAT WE SHALL OUTLIVE</p>" +
                                "<p>WHAT SAY YOU</p>";
      playerOptionsAreaOne.innerHTML = "Kick At Them";
      playerOptionsAreaTwo.innerHTML = "\"I Submit.\"";
    }else if (playerOptionsAreaOne.innerHTML === "Kick At Them"){
      gameStoryArea.innerHTML = "<p>YOU CHOOSE DEATH</p>" +
                                "<p> - </p>" +
                                "<p>SO BE IT</p>" +
                                "<p>The trees around you alight in flame as the crystaline spire purges the land" +
                                " with blinding beams. The wildlife is charred and smoked long before they think of" +
                                " escaping the heats gaze.</p><p>The humming has turned to excessive chanting, a language you do not" +
                                " know. Yet as you watch the sky turn a blood red, the sun blotted out by ash, and the very green" +
                                " of the earth crisp to black, you understand what they chant.</p>" +
                                "<p>'Death!'</p>" +
                                "<p>'Death!'</p>" +
                                "<p>'Death!'</p>" +
                                "<p>You reach towards the earth, a last grasp of redemption, 'This is my doing...' you mutter.</p>" +
                                "<p>'Death!'</p>" +
                                "<p>'Death!'</p>" +
                                "<p>'Death!'</p>" +
                                "<p>The earth hears your pleas responding with fire raining from the sky, the ground cracking" +
                                " beneath you, great heaps of magma burting from its seams.</p>" +
                                "<p>Tears welt in your eyes,'I Am Sorry....'</p>" +
                                "<p>'Death!'</p>" +
                                "<p>'Death!'</p>" +
                                "<p>'Death!'</p>";
      playerOptionsAreaOne.innerHTML = "Try Again";
      document.getElementById("PlayerOptionsTwo").style.visibility = 'hidden';
    }else if (playerOptionsAreaOne.innerHTML === "West To Dussk"){
      gameStoryArea.innerHTML = "<p>You reach the west bend and marvel at the sight of it, the grass fields blowing" +
                                " waving in the wind, flower petals being carried away towards Harreks Bay." +
                                " Small moles and meerkat's pop their heads above the tall grass and hoot to one another." +
                                " The smell of the sea waves over you, and under the smell lies another, yet far more foul.</p>" +
                                "<p>They spring from the grass onto the road weapons in hand and bow's drawn, the source" +
                                " of the rotten cheese smell, bandits.</p>" +
                                "<p>'Giv' uhs all ye got, er we whill dropp ye dead in tha road!' the large one with the" +
                                " beard yells as he steadys his grip upon his greatsword. The other man wields a dented sword and" +
                                " wooden box, which must be constituting as his shield, as the woman readys an arrow" +
                                " onto her bow string.</p><p> As you face adversity, you decide to......</p>";
      playerOptionsAreaOne.innerHTML = "Run";
      playerOptionsAreaTwo.innerHTML = "Show Them You Have Nothing";
    }else if (playerOptionsAreaOne.innerHTML === "East To Gennii"){
      gameStoryArea.innerHTML = "<p>You reach Gennii... or what remains.</p><p> The city is afire, smoke and ash clouding" +
                                " your vision. People rush from the city covered in soot. Women scream and reach for their" +
                                " lost homes, men grab their children in embrace. The source of the fire lies to the sky.</p>" +
                                "<p>Its skin smooth while pinned with arrows, its legs strong and clawed, its leather wings" +
                                " torn from age. An ice drake from the ShivverPeaks.</p><p>A young woman runs ahead of the" +
                                "clump of survivors, throwing aside those that stop her, 'My son!' she wails, 'My baby!'</p>" +
                                "<p>All anyone can hear is the creak and crack of burning wood. Yet you hear a cry answer the" +
                                "mother. You look upon the survivors and see no one stir.</p><p>You clench your hands and" +
                                "take a forward step......</p>";
      playerOptionsAreaOne.innerHTML = "To The Northern Winds";
      playerOptionsAreaTwo.innerHTML = "To Save The Child";
    }else if (playerOptionsAreaOne.innerHTML === "To The Northern Winds"){
      gameStoryArea.innerHTML = "<p>It is freezing yet you endure.</p><p>You continue to follow the path, at least what" +
                                " little isnt covered by snow and ice. Marching forward with the hope of warm" +
                                " fire at Feraxis, you almost miss the two floating red orbs ahead of you clouded" +
                                " by the blizzard. Close to 5 feet off of the ground, the orbs reflect red light" +
                                " that makes the snow blood red, only, mabye the snow is already red with blood...</p>" +
                                "<p>you take a step closer towards the orbs, but they aren't orbs at all, as they" +
                                " blink slowly, still fixed upon you. You feel sweat freeze on your forehead and" +
                                " your legs nearly give way. You need to do somthing, you need to......</p>";
      playerOptionsAreaOne.innerHTML = "Run Around The Beast";
      playerOptionsAreaTwo.innerHTML = "Keep Following The Path";
    }else if (playerOptionsAreaOne.innerHTML === "Try Again" || playerOptionsAreaOne.innerHTML === "Play Again"){
      endGame = true;
    }
    
    for(var count = 0; count < 1 && endGame === true; count++){
      window.location.reload();
    }
  });
  
  playerOptionsAreaTwo.addEventListener('click', function(){
    if (playerOptionsAreaTwo.innerHTML === "Follow The River"){
      gameStoryArea.innerHTML = "<p>You reach a small bay that must be part of the Vaale Strait. You immediatly relize why" +
                                " logs had been floating down the river.</p><p>A troll the size of a castle sits in the midst" +
                                " over torn stumps and fallen trees. He grumbles in delight as he tosses another tree" +
                                " into the river, making a wave that splashes over you.</p><p>To your luck the troll seems to" +
                                " have not noticed you, looking at your map and the troll, you decide to......<p>";
      playerOptionsAreaOne.innerHTML = "Go Behind The Troll To Dussk";
      playerOptionsAreaTwo.innerHTML = "Go In Front Of The Troll To Dussk";
    }else if (playerOptionsAreaTwo.innerHTML === "Go In Front Of The Troll To Dussk"){
      gameStoryArea.innerHTML = "<p>You edge around the base of the river, dodging a log that comes flying towards you.</p>" +
                                "<p>And then it happens.</p>" +
                                "<p>You hear the troll scream and the sound of small quakes with each of its steps.</p>" +
                                "<p>You feel large hands grab you, crushing your ribs into small splinters before picking" +
                                " you off of the ground.</p>" +
                                "<p>The last thing you see is yellow corroded teeth over the background of a slimy red throat.</p>" +
                                "<p>The last thing you smell is almost enough to kill you before the bite does.</p>";
      playerOptionsAreaOne.innerHTML = "Try Again";
      document.getElementById("PlayerOptionsTwo").style.visibility = 'hidden';
    }else if (playerOptionsAreaTwo.innerHTML === "Show Them You Have Nothing"){
      gameStoryArea.innerHTML = "<p>'Ye what?' balks the bearded man.</p>" +
                                "<p>'Him say eeh don got things.' the woman with the bow restates with a smack to the back" +
                                " of the bearded mans head.</p>" +
                                "<p>'Whell we don need eem to ave' anyfing. We's can still sell'm up norf to dem sailors in Dussk.'</p>" +
                                "<p>'Rought we can.' the shield bearer says with a toothless grin.</p>" +
                                "<p>And so you find yourself tied at the wrists slung over the shoulder of the bearded man." +
                                " They carry you the whole way to Dussk, a city surrounded by nearly nothing but water," +
                                " due to this, sails dot the horizon across the city.</p><p>Nets for sale, fish, and harpoons," +
                                " whale oil drums, and leather sails, this is a port town without a doubt in your mind." +
                                " The bandits sell you as a worker for the fishing ship Meralda. Though for a fishing" +
                                " vessel, it has an incredible amount of cannons out of the hull, and mounted along the" +
                                " gunwale of the ship. The captain, Torveka, also looks more weathered to be a simple" +
                                " fishing captain. Yet he puts you to work scrubing the floors of the captains cabin.</p>" +
                                "<p>While inside you find a map showing the route of your trip, it appears that they plan" +
                                " on sailing north to the Shatter Sea.</p><p>The route is represented by small tacks with" +
                                " string tied on to each, easily changable if need be, and you......</p>";
      playerOptionsAreaOne.innerHTML = "Change The Route";
      playerOptionsAreaTwo.innerHTML = "Keep Cleaning";
    }else if (playerOptionsAreaTwo.innerHTML === "Keep Cleaning"){
      gameStoryArea.innerHTML = "<p>Through the frozen waters around the ShivverPeaks you have finaly made it to" +
                                " the Shatter Sea. The cold wind off of the sea chills your very bones, but the" +
                                " other sailors seem to ignore it, the ride has luckily been calm for most of the route," +
                                " you thank the gods, doubting your stomach could stand the boat thrashing about.</p>" +
                                "<p>Though you are confused as to what type of fishing you will be doing, after finding" +
                                " only cannons on the ship. No nets, not a harpoon, nor even a simple fishing pole," +
                                " only cannons and cannonballs, some hollow with shreads of metal inside. Taking back" +
                                " your previous comment on your stomach, you see storm clouds pitch black rolling over the" +
                                " horizon, light flashing withen the clouds.</p>" +
                                "<p>'Clouds off the bow! All to the ready!' yells the crows mate. The crew runs about you" +
                                " franticly collecting cannonballs and preparing the cannons. You stand in the middle of" +
                                " the deck confused as the whole of the crew stares towards the storm, shaking in their boots.</p>" +
                                "<p>The captain stands behind the wheel, 'Where are ye.' he mutters, eyes fixed on the" +
                                " storm, a grin upon his face.</p><p>Your long into the storm, the boat getting tossed like" +
                                " a doll, you grip the mast, getting soaked to the bone as you stare with the crew into the dark.</p>" +
                                "<p>'Rocks Ahead!' Yells the crows mate, you see the large spike jutting out of the ocean.</p>" +
                                "<p>'Nay!' bellows the captain, 'It be her!'</p>" +
                                "<p>The spikes rise from the ocean, raising higher than the clouds, you spot two glowing" +
                                " orange eyes on what appears to be a head, millions of man sized razor teeth lining the" +
                                " inside of its mouth. It roars a deafening sound and lifts a large leg through the waves" +
                                " to step closer to your ship.</p>" +
                                "<p>'Let loose!' the captain barks, and every cannon is fired upon the beast. The hits" +
                                " appear to barley even phase the monster, yet it throws back its head." +
                                " At last a humming starts to verbrate the air, and the dark is pierced by a blue haze" +
                                " which eminates off the spikes of the monster. The light slowly flows up the back of the creature" +
                                " until it reaches its head. The beast gapes it mouth wide, blue light emanating out.</p>" +
                                "<p>It all happend faster than you would imagine.</p>" +
                                "<p>The creature shot a beam of the light from its mouth, causing the very water around you to light" +
                                "aflame. The beam cathces the sail causing it to burn and fall apart on top of you and the crew.</p>" +
                                "<p>'Stay to yer stations ye cowards, we nearly got em' the captain yells.</p>" +
                                "<p>You doubt very much that the beast is nearly dead, yet now is your time to choose," +
                                "and with a look at your now laughing captain, you......</p>";
      playerOptionsAreaOne.innerHTML = "Escape";
      playerOptionsAreaTwo.innerHTML = "Stay And Fight";
    }else if (playerOptionsAreaTwo.innerHTML === "Stay And Fight"){
      gameStoryArea.innerHTML = "<p>You take a forward step towards a cannon before being crushed by the falling mast.</p>" +
                                "<p>Your legs smashed, you lay upon the deck, rain collecting on your face.</p>" +
                                "<p>You look up at the sound of humming again, only to be blinded by the beasts blue light.</p>";
      playerOptionsAreaOne.innerHTML = "Try Again";
      document.getElementById("PlayerOptionsTwo").style.visibility = 'hidden'; 
    }else if (playerOptionsAreaTwo.innerHTML === "East Towards The Fork"){
      gameStoryArea.innerHTML = "<p>Reaching the fork in one days time was a blessing. Yet now the choice is upon" +
                                " you.</p><p>Luckly enough you only have two choices, The West Bend that continues on" +
                                " towards Gennii, or The Bridge Road that heads to The Mourning Vale, The" +
                                " Southern-Winds being blocked off by trees and fallen rocks, it looks as though" +
                                " a hurricane has passed through.</p><p>You try not to think to heavily on it, and" +
                                " instead decide to go......";
      playerOptionsAreaOne.innerHTML = "North Following The West Bend";
      playerOptionsAreaTwo.innerHTML = "East On The Bridge Road";
    }else if (playerOptionsAreaTwo.innerHTML === "East On The Bridge Road"){
      gameStoryArea.innerHTML = "<p>Through the trees you come across The Farahr River, babbiling in its calm motion.</p>" +
                                "<p>A stone bridge archs over the river, and on it stands a lone knight, sword held" +
                                " upon his chest as he stands vanguard over the bridge.</p>" +
                                "<p>'Halt!' the knight must have said, you stand bewildered at how high piched his voice is." +
                                " He does not move a muscle, neither do you. The sound of the river is the only noise.</p>" +
                                "<p>You take a step.</p>" +
                                "<p>'Halt I Say!'</p>" +
                                "<p>'I need to cross.' you tell the knight, 'I am on an important journey which requires" +
                                " me to pass.' The knight doesnt move. You take another step.</p>" +
                                "<p>'What do you not understand peasant, halt! What buisness have you here!'</p>" +
                                "<p>'I said I was on a journey.' you reply. You are greeted only by silence as the knight" +
                                " remains to stand.</p>" +
                                "<p>'Well!? What buisness have you!' the knight finaly demands.</p>" +
                                "<p>You twist your face in anger 'I said I was on a journey!' you yell.</p>" +
                                "<p>'You have entered a tourney!? Do not fool Ralor The Bright! There is no tourney in these lands!'</p>" +
                                "<p>'No, you have it wrong!' you cry in dismay, 'I have been traveling on a dangerous journey!" +
                                " I need to get across you to the Mourning Vale so as to reach the end of my said journey!'</p>" +
                                "<p>Ralor drops a hand to his side, using only one hand for his golden greatsword." +
                                " 'Are you certain!?' The Knight replys, 'Well if you think you can take me on before your tourney" +
                                " try if you will!'</p><p>The knight picks up his sword and begins to trot at your direction," +
                                " thinking fast, you......</p>";
      playerOptionsAreaOne.innerHTML = "Run Past Ralor";
      playerOptionsAreaTwo.innerHTML = "Jump From The Bridge";
    }else if (playerOptionsAreaTwo.innerHTML === "Jump From The Bridge"){
      gameStoryArea.innerHTML = "<p>The water splashes around you as you are carried away by the current.</p><p>'Goodbye friend!'" +
                                " Ralor waves as you clamber out onto the other side. Keeping a safe distance from" +
                                " the Bridge Road you eventualy reach Mourning Vale, but potentaly at the wrong time.</p>" +
                                "<p>Signs hang on their hinges, blood splaters the streets, and screams of every kind" +
                                " can be heard reverberating off of the walls. You walk through an iron gate and feel" +
                                " a cold hand pull you to the ground.</p>" +
                                "<p>'Quiet!' the man hisses. He points ahead of you where three bandits are picking off" +
                                " the citizens as they try to escape. One recives one of the bandits arrows in their back," +
                                " causing them to spral across the ground.</p>" +
                                "<p>'I ave a boat.' the man says to you, 'An we can leave this place, there is nufing" +
                                " ere for the bofh of us. Now I don care where we'll be going, just that we go." +
                                " whatta ya say?'</p>" +
                                "<p>You look at this small, shriveled, toothless man, his long scraggly hair dripping" +
                                " wet, do you trust him, or do you trust the bandits pulling arrows from a mothers" +
                                " spine?</p><p>The choice is obvious, but where to go? You decide to......</p>";
      playerOptionsAreaOne.innerHTML = "Sail To Lake Dan";
      playerOptionsAreaTwo.innerHTML = "Sail On The Farahr River";
    }else if (playerOptionsAreaTwo.innerHTML === "To Save The Child"){
      gameStoryArea.innerHTML = "<p>You rush through the fire and flames, your arm to your mouth as you cough furiously.</p>" +
                                "<p>You hear the crowd behind you gasp and cry to your suicidal intentions.</p>" +
                                "<p>Your feet carry you over charred corpses and fallen structures. You reach the source of the" +
                                " crying inside a burning tavern. Kicking the door down pushes back the creeping flames, giving you sight" +
                                " of the child. Unharmed, the child is blocked by fallen debris.</p>" +
                                "<p>'Go!' you usher the boy onward as you lift a fallen rafter in his way. The small child clambers up" +
                                " and rushes towards you on small legs. He stops and grips your leg in a tiny hug, tears streaming down his" +
                                " cheeks. You try to get loose of the child, 'Go!' You yell again, 'Run to your mother!'</p>" +
                                "<p>The boy Registers this, lets go of your leg, and bolts for the door." +
                                " You lose sight of the boy as your arms begin to give way. Letting the rafter fall to the ground" +
                                " makes you drop as well, the collision breaking down the southern facing wall of the tavern.</p>" +
                                "<p>You have a glance at the mother embracing her child, a tears on her face. She looks to you" +
                                " and smiles, mouthing a 'thank you.'</p>" +
                                "<p>Then all else goes dark as the roof falls upon you.</p>" +
                                "<p>Yet a light remains.</p>" +
                                "<p>TO TAKE A LIFE FROM THE WORLD WITH YOUR OWN HANDS - IS AN EASY TASK THAT ALL MEN MAKE TO INSURE THEIR LIVES NEVER END</p>" +
                                "<p>YET HERE YOU STAND A HARDER TASK - ONE NOT MANY CAN ADMIT</p>" +
                                "<p>TO HAVE BEEN GIVEN CHOICE BETWEEN ONES OWN LIFE - AND THE LIFE OF ONE LESS EQUIPT</p>" +
                                "<p>TO DENY THE GODS OF DEATH AND LIFE - AND MAKE YOUR MORALS STAND INSTEAD</p>" +
                                "<p>YOU HAVE PROVEN THAT WE ARE WROUNG - THAT YOUR PEOPLE MAY YET STILL LIVE</p>" +
                                "<p>FOR A TASK AS GRAND AS TO GIVE THEIR LIFE - FOR A MINOR KID</p>" +
                                "<p>WE ADMIT DEFEAT AND GRANT YOU SUCCESS - YOUR JOURNEY IS AT ITS END</p>" +
                                "<p>WE OFFER YOU ETERNAL PEACE - YOUR LIFE WAS WELL SPENT</p>" +
                                "<p>The light breaks through, and you stand upon the clouds. A parting allows you to see" +
                                " below at the crystaline spire, what was your entire journey, fall to pieces and crumble.</p>" +
                                "<p>You feel at peace, you feel happy, a song inside your soul.</p>" +
                                "<p>You Have Won</p>";
      playerOptionsAreaOne.innerHTML = "Play Again";
      document.getElementById("PlayerOptionsTwo").style.visibility = 'hidden';
    }else if (playerOptionsAreaTwo.innerHTML === "Sail On The Farahr River"){
      gameStoryArea.innerHTML = "<p>You make the long sail to Asstihi. The city bares no walls, and instead has" +
                                " many tents and kiosks.</p><p>This city sees far more trade than most. The old man" +
                                " looks at you from the front of the boat.</p>" +
                                "<p>'What will ye be doin now? Ye could make for de city and take da Seven Deaths," +
                                " or ye could always join meh to de Metroid Sea. Whatever suits you, i's hope ye can" +
                                " feel to trust me now.' he adds with another toothless grin. With the old man in mind," +
                                " you......</p>";
      playerOptionsAreaOne.innerHTML = "Go To The Metroid Sea";
      playerOptionsAreaTwo.innerHTML = "Take The Seven Deaths";
    }else if (playerOptionsAreaTwo.innerHTML === "Take The Seven Deaths"){
      gameStoryArea.innerHTML = "<p>The sun bares down upon you as your torn shoes collect sand with every step.</p>" +
                                "<p>Everything is dead here. No animals, no plants, not even the wind, the only thing" +
                                " in sight is the consistently golden sand, the dirt path you were told to follow" +
                                " by the locals.</p>" +
                                "<p>'Do not stray from the path!' they had said, 'Though little it will help, everyone" +
                                " dies on it, it always gets you!'</p>" +
                                "<p>A thought crosses your mind, maybe the boat handler is still in Asstihi.</p>" +
                                "<p>Mabye he stayed and is waiting for you to turn back. Should you......</p>";
      playerOptionsAreaOne.innerHTML = "Turn Back";
      playerOptionsAreaTwo.innerHTML = "Keep Going";
    }else if (playerOptionsAreaTwo.innerHTML === "Keep Going"){
      gameStoryArea.innerHTML = "<p>You see mountains ahead, you are nearly there, yet you do not feel happy.</p>" +
                                "<p>Water.'</p>" +
                                "<p>You feel dead.</p>" +
                                "<p>'Water.'</p>" +
                                "<p>But what is that over the horizon.</p>" +
                                "<p>'Water?'</p>" +
                                "<p>You see tropical trees, and the shimmering reflection that only comes off of...</p>" +
                                "<p>'WATER!'</p>" +
                                "<p>The water is off of the path, so you......</p>";
      playerOptionsAreaOne.innerHTML = "Go off The Path";
      playerOptionsAreaTwo.innerHTML = "Ignore It";
    }else if (playerOptionsAreaTwo.innerHTML === "Ignore It"){
      gameStoryArea.innerHTML = "<p>Feeling grateful of the villagers advice, you madly lap up water from a small" +
                                " pond in the Burnt Wood.</p><p>Yet you grow tired from your long trek, your eyes growing" +
                                " heavy and falling down, mabye you could just sit down in this dead wood, ash" +
                                " heavy in the air, and just sleep, mabye you can......</p>";
      playerOptionsAreaOne.innerHTML = "Sleep";
      playerOptionsAreaTwo.innerHTML = "Go To Dark Rock";
    }else if (playerOptionsAreaTwo.innerHTML === "Go To Dark Rock"){
      gameStoryArea.innerHTML = "<p>The town is burnt down, layered heavily in ash. You cough getting some in your throat.</p>" +
                                "<p>That was a mistake.</p>" +
                                "<p>Figures rise from the ashes, made from the ashes, awoken from your noise. They gently" +
                                "float towards you, a high pitched screech lifting the air, the swords that they carry" +
                                "look to be made of ash as well. However, when they past through you, blood still wells up...</p>";
      playerOptionsAreaOne.innerHTML = "Try Again";
      document.getElementById("PlayerOptionsTwo").style.visibility = 'hidden'; 
    }else if (playerOptionsAreaTwo.innerHTML === "To The Northern Winds"){
      gameStoryArea.innerHTML = "<p>It is freezing yet you endure.</p><p>You continue to follow the path, at least what" +
                                " little isnt covered by snow and ice. Marching forward with the hope of warm" +
                                " fire at Feraxis, you almost miss the two floating red orbs ahead of you clouded" +
                                " by the blizzard. Close to 5 feet off of the ground, the orbs reflect red light" +
                                " that makes the snow blood red, only, mabye the snow is already red with blood...</p>" +
                                "<p>you take a step closer towards the orbs, but they aren't orbs at all, as they" +
                                " blink slowly, still fixed upon you. You feel sweat freeze on your forehead and" +
                                " your legs nearly give way. You need to do somthing, you need to......</p>";
      playerOptionsAreaOne.innerHTML = "Run Around The Beast";
      playerOptionsAreaTwo.innerHTML = "Keep Following The Path";
    }else if (playerOptionsAreaTwo.innerHTML === "Keep Following The Path"){
      gameStoryArea.innerHTML = "<p>You show bravery walking towards the beast, yet the beast doesn't change its mind, with a forward lunge" +
                                " its jaws grip around your neck and squeeze.</p>";
      playerOptionsAreaOne.innerHTML = "Try Again";
      document.getElementById("PlayerOptionsTwo").style.visibility = 'hidden'; 
    }else if (playerOptionsAreaTwo.innerHTML === "Towards The Trees"){
      gameStoryArea.innerHTML = "<p>Reaching the trees led to the end of the blizzard. With the sun beating down" +
                                " on the pristine white snow, you begin to warm up. There also appears to be a" +
                                " river flowing through, looking at your map, this may be The Snail.</p><p>You have" +
                                " very little time to think to yourself however as a figure emerges from the trees.</p>" +
                                "<p>He is a muscular individual with a bald head and very large curly mustache" +
                                " which almost completly covers his very large smile. He wears no shirt but a strap" +
                                " across his chest keeping his shoulder pad in place, as he totes a door with the" +
                                " face of a ram that is the size of himself, he appears to use the door as a sheild.</p>" +
                                "<p>He looks to you, a friendly sparkle in his eye's. If your map is correct, you" +
                                " need to cross this river, looking at it as ice peacfully floats down it, you" +
                                "wager it is probably very cold. But mabye the strange man could assist you?" +
                                "You don't think very long and, decide to......</p>";
      playerOptionsAreaOne.innerHTML = "Ask For The Mans Assistance";
      playerOptionsAreaTwo.innerHTML = "Cross The River Yourself";
    }else if (playerOptionsAreaTwo.innerHTML === "Cross The River Yourself"){
      gameStoryArea.innerHTML = "<p>You sneak away from the strange man and head to the edge of the river.</p><p>You jump to land on" +
                                " top of a glacier, but slip on its ice. Landing with a splash and feeling the cold creep through your body.</p>" +
                                "<p>you freeze to death.</p>";
      playerOptionsAreaOne.innerHTML = "Try Again";
      document.getElementById("PlayerOptionsTwo").style.visibility = 'hidden';
    }else if (playerOptionsAreaTwo.innerHTML === "Try To Find The Path"){
      gameStoryArea.innerHTML = "<p>The path was hard to find the the dark thistle that is The Shadow Wood, yet" +
                                " here you are. You hear a strange humming vibrating through the earth, could it" +
                                " be from the Spire</p><p>The path seems to loop around a ways before heading towards" +
                                " the Crystalline Spire, you could cut through the forest to make a shortcut, you" +
                                " did make it through the forest on your own before. It would save time and" +
                                " currently you have this strange sensation that pulls you towards the Spire. You" +
                                " end up ................</p>";
      playerOptionsAreaOne.innerHTML = "On The Path";
      playerOptionsAreaTwo.innerHTML = "Cut Through The Forest";
    }else if (playerOptionsAreaTwo.innerHTML === "Cut Through The Forest"){
      gameStoryArea.innerHTML = "<p>Pushing aside branches and through shrubbery, you find a small opening, the trees" +
                                " branching over keeping the area in darkness. You reach forward to push away the last of the" +
                                " branched and feel somthing sticky.</p><p>You pull your hand back towards the little light there is," +
                                " and see it is very large webbing.</p><p>You hear the scuttling of legs around you and a high pitched hiss." +
                                " The branches around you break forward as somthing lunges on top of you, knocking the air from you.</p>" +
                                "<p>Its body is thick with sharp hair that cuts your skin, yet you don't feel the pain.</p>" +
                                "<p>You don't even feel its fang flood your body with poisons.</p>";
      playerOptionsAreaOne.innerHTML = "Try Again";
      document.getElementById("PlayerOptionsTwo").style.visibility = 'hidden';
    }else if (playerOptionsAreaTwo.innerHTML === "Head Towards The Path"){
      gameStoryArea.innerHTML = "<p>The Spire stands before you, illuminating the area bright purple as the sun's" +
                                " rays pass through the crystals that float at its peak. You hear humming from the" +
                                " top faint to the ear, yet what you make out sounds to be from multiple sources," +
                                " and not of a language that you know, yet still enticing</p><p>You edge towards the" +
                                " tower, but begin to question yourself.</p><p>You have no idea what will happen once" +
                                " you get there. In fact the only reason you are here at all is based on a small" +
                                " note found in your breeches after you had been passed out</p><p>Keeping in mind your" +
                                " journey so far, and the little you do know, you decide to......</p>";
      playerOptionsAreaOne.innerHTML = "Go Towards The Door";
      playerOptionsAreaTwo.innerHTML = "Sneak In Undercover Of Night";
    }else if (playerOptionsAreaTwo.innerHTML === "Sneak In Undercover Of Night"){
      gameStoryArea.innerHTML = "<p>The moons light makes the crystals twinkle pink light. It makes for a beautifull" +
                                " sight as you slowly inch around the base of the Spire.</p><p>You glance into the forest" +
                                " to see the eyes of wildlife staring at you, or, do they bend their eyes" +
                                " upon the tower? Somthing keeps them around the treeline, and away from you.</p>" +
                                "<p>On the southern end, you see a door.</p>" +
                                "<p>The moons light shines upon it forming white runes that seem burnt into the" +
                                "wood. You are startled when you notice the door has no handle, how will it open?</p>" +
                                "<p>You reach out with a trembling hand towards the door and attemt push it open." +
                                " Your hand slides over the door and wipes away at the moon runes, as they mist" +
                                " into the night sky.</p><p>You watch them vaporize above you to look down and see" +
                                " where once there was a door, was now blackness that slowly seeped from the" +
                                " bottom of the door.</p>";
      playerOptionsAreaOne.innerHTML = "Go Inside";
      playerOptionsAreaTwo.innerHTML = "Run Away";
    }else if (playerOptionsAreaTwo.innerHTML === "Run Away"){
      gameStoryArea.innerHTML = "<p>Fear had filled your heart as the blackness seeped before you, fear that made" +
                                " even the most adventurous as yourself run away from the task at hand.</p><p>Your Retreat took" +
                                " you as far away as Faraxis, the snow covered village with warm hearth for the feet, juicy" +
                                " goat meat for the mouth, and suprisingly warm goat milk for the stomach. You settle down" +
                                " here for a long time, though how long is lost to you as you await the doom that was fortold" +
                                " upon the note that you now clench in a fist each night.</p>" +
                                "<p>FOR IF YOU FAIL A DARNESS WILL GRASP - AND ALL THAT IS LIVING SHALL SOON PASS</p>" +
                                "<p>The words that had once pushed onward your journey, now cause you nightmares and sleepless nights." +
                                "<p>You had failed, you could not do it, though what 'it' was remains lost to you.</p>" +
                                "<p>You sit in the Burning Mare's Inn as you do everyday, listening to the merriment of those" +
                                " around you as they toast to good health and praise the sun. You sit in the darkest corner" +
                                " closest to the innkeep who had seen the fear in your eyes the moment you had stepped into" +
                                " Faraxis, immediately offering you food and shelter for as long as you had decided to stay.</p>" +
                                "<p>You begin to nod off, drowsy off of the warm milk, the noise begining to blur behind you.</p>" +
                                "<p>'Fergus, please ready a glass for me and my friend here.' a man bellows behind you. as you hear " +
                                " the door slam open.</p>" +
                                "<p>'Sure thing friend!' replys the innkeep, as he readys a glass near you. The two men sit to your right," +
                                " the one closest looking weathered, his hair matted down from the melt of collected snow.</p>" +
                                "<p>'You a local?' the man asks.</p>" +
                                "<p>You hide the note away in your pocket, 'no.' , you say after you clear your throat</p>" +
                                "<p>'Ah, I was lost out there in the blizzard when Toris here... ' he points to where his friend" +
                                " had been sitting next to him, now an empty chair with a cleaned glass mug of what had been goats milk.</p>" +
                                "<p>'Guess he had other buisness.' you tell the man.</p>" +
                                "<p>'Don't we all.' the man pulls out a small piece of leather with vaguely visable letters upon it." +
                                " The man drinks the rest off his glass and gets out of his seat, asking others for the fastest route" +
                                " across The Snail, you wish him luck and head back to your room, dropping the note on the floor along the way.</p>" +
                                "<p>Tonight you have no dreams, only sleep.</p>";
      playerOptionsAreaOne.innerHTML = "Try Again";
      document.getElementById("PlayerOptionsTwo").style.visibility = 'hidden';
    }else if (playerOptionsAreaTwo.innerHTML === "\"Why Did I Come Here?\""){
      gameStoryArea.innerHTML = "<p>WE SELDOM JOURNEY FAR FROM OUR PLACE - YET SOME HOW WE REMAIN IN SPACE</p>" +
                                "<p>WE LIVE WITHIN A DIFFRENT SPACE - A SPACE BETWEEN ALL OTHER PLACES</p>" +
                                "<p>A FIRE BURNS WITHIN OUR SPACE - MADE UP OF WHICH BY OUR RAGE</p>" +
                                "<p>THE FIRE BUILDS AS STARS FLICKER AWAY - YET THE FIRE KEEPS THE EVIL AWAY</p>" +
                                "<p>TO CLEANSE AND PURGE OUR TASK REMAINS - TO REMOVE ALL THAT LURKS AT BAY</p>" +
                                "<p>WE COME FOR JUSTICE AND LEAVE ONLY PAIN - AND NOW OUR FINAL TASK REMAINS</p>" +
                                "<p>YOU AND US CAN NOT LIVE AT PEACE - YET NEITHER SHAN'T YOU DIE WITHOUT OBEDIENCE</p>" +
                                "<p>WE OFFER YOU A BRIGHTER FUTURE - FOR WHICH YOU ANSWER TO OUR RULE</p>" +
                                "<p>YOUR LIFE SHALL ALWAYS BE THE SAME - WITH SMALL CHANGES REARRANGED</p>" +
                                "<p>YOU WILL MARRY, ADVENTURE, STAKE A CLAIM - YET ALL WILL BE FOR DUTYS SAKE</p>" +
                                "<p>YOU WILL KILL, LOVE, AND MAKE A FUTURE - BUT YOUR EMOTIONS WILL NEVER SHIFT</p>" +
                                "<p>CONTROL WILL BE TAKEN FROM YOUR HANDS - AND THRUST BEFORE YOUR MASTER LORDS</p>" +
                                "<p>THIS OFFER IS GIVEN BUT ONCE - OUR PATHS SHALL NEVER AGAIN PASS<p>";
      playerOptionsAreaOne.innerHTML = "\"What!\"";
      playerOptionsAreaTwo.innerHTML = "\"What?\"";
    }else if (playerOptionsAreaTwo.innerHTML === "\"What?\""){
      gameStoryArea.innerHTML = "<p>WE WISH NOT FOR THIS TO BE A HARD CHOICE - OR THAT YOU ARE FRIGHTENED BY OUR VOICE</p>" +
                                "<p>JUST THAT YOU RELIZE THE THREAT THAT WE MAKE - WHILE YOU THINK OF WHATS AT STAKE</p>" +
                                "<p>NOT MANY HAVE BEEN GIVEN THIS CHOICE - ONE THAT WE HOPE YOU WILL REJOICE</p>" +
                                "<p>NO LONGER SHALL WE HOLD OUR BREATH - TO AWAIT YOUR POTENTIAL DEATH</p>" +
                                "<p>SO WHAT SAY YOU OF MUCH SKILL - ONE THAT REMAINS SILENT STILL</p>" +
                                "<p>TO STAND AND TAKE THE KNOWLEDGE THAT WE GIVE - BE WARY THAT WE SHALL OUTLIVE</p>" +
                                "<p>WHAT SAY YOU</p>";
      playerOptionsAreaOne.innerHTML = "Kick At Them";
      playerOptionsAreaTwo.innerHTML = "\"I Submit.\"";
    }else if (playerOptionsAreaTwo.innerHTML === "\"I Submit.\""){
      gameStoryArea.innerHTML = "<p>GOOD</p>" +
                                "<p>Light fills the room from above you, you see a stair that leads around the inside of the tower.</p>" +
                                "<p>You climb the final step and view the valley around you. The trees blow in the wind, a smell of flowers" +
                                " in the air. The sun shines over the ocean in the distance, reflecting light that breaks the density of the trees," +
                                " small animals bounding from the long night into the new morning, birds chirping to each other as pure white" +
                                " clouds float over head.</p><p>You sit upon the top of the tower and view the crystals that float above you, their" +
                                " light bright purple upon the land around you. The faint humming still reverberate off of the walls of the tower.</p>" +
                                "<p>All of this.</p>" +
                                "<p>Yet you feel nothing.</p>";
      playerOptionsAreaOne.innerHTML = "Try Again";
      document.getElementById("PlayerOptionsTwo").style.visibility = 'hidden';
    }
  });
}

YouWakeUp();