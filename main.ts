input.onPinPressed(TouchPin.P0, function () {
    if (pause2 == 0) {
        Character.change(LedSpriteProperty.Y, -1)
    }
    if (pause2 == 1) {
    	
    }
})
input.onButtonPressed(Button.A, function () {
    if (pause2 == 1) {
    	
    }
    if (pause2 == 0) {
        Character.change(LedSpriteProperty.X, -1)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (pause2 == 1) {
    	
    }
    if (pause2 == 0) {
        Character.change(LedSpriteProperty.Y, 1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (pause2 == 1) {
    	
    }
    if (pause2 == 0) {
        Character.change(LedSpriteProperty.X, 1)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
let Pain = 0
let Keys = 0
let Key_3_last = 0
let sound1 = 0
let Egg = 0
let Room = 0
let Time_Passed = 0
let score_for_keys = 0
let pause2 = 0
let Character: game.LedSprite = null
let Key_1 = 0
let Key2 = 0
let Key_3 = 0
let Start_Time = input.runningTime()
Character = game.createSprite(2, 2)
let Game_1 = 0
let Game_2 = 0
let Point = 0
basic.forever(function () {
    if (score_for_keys == 3) {
        Time_Passed = (input.runningTime() - Start_Time) / 1000
        basic.showString("YOU WIN")
        basic.showString("" + (Time_Passed))
        game.setScore(3)
        game.gameOver()
    }
    if (Room == 0) {
        led.plot(0, 0)
        led.plot(1, 0)
        led.plot(3, 0)
        led.plot(4, 0)
        led.plot(0, 1)
        led.plot(0, 2)
        led.plot(0, 3)
        led.plot(0, 4)
        led.plot(1, 4)
        led.plot(3, 4)
        led.plot(4, 4)
        led.plot(4, 3)
        led.plot(4, 2)
        led.plot(4, 1)
        if (Egg == 1) {
            music.playMelody("C5 C5 A B C5 A G E ", 120)
            music.playMelody("C C E D C E F A ", 120)
            sound1 = 0
            basic.pause(500)
            Time_Passed = (input.runningTime() - Start_Time) / 1000
            basic.showString("TRUE WINNER")
            basic.showString("" + (Time_Passed))
            basic.showString("Seconds")
            game.setScore(100)
            game.gameOver()
        }
        if (Character.get(LedSpriteProperty.X) == 2) {
            if (Character.get(LedSpriteProperty.Y) == 4) {
                Room = 66
                Character.set(LedSpriteProperty.Y, 1)
            }
        }
        if (Character.get(LedSpriteProperty.X) == 0) {
            Character.set(LedSpriteProperty.X, 1)
        }
        if (Character.get(LedSpriteProperty.X) == 4) {
            Character.set(LedSpriteProperty.X, 3)
        }
        if (Character.get(LedSpriteProperty.Y) == 4) {
            if (Character.get(LedSpriteProperty.X) == 1) {
                Character.set(LedSpriteProperty.Y, 3)
            }
        }
        if (Character.get(LedSpriteProperty.Y) == 4) {
            if (Character.get(LedSpriteProperty.X) == 3) {
                Character.set(LedSpriteProperty.Y, 3)
            }
        }
        if (Character.get(LedSpriteProperty.Y) == 0) {
            if (Character.get(LedSpriteProperty.X) == 3) {
                Character.set(LedSpriteProperty.Y, 1)
            }
        }
        if (Character.get(LedSpriteProperty.Y) == 0) {
            if (Character.get(LedSpriteProperty.X) == 1) {
                Character.set(LedSpriteProperty.Y, 1)
            }
        }
        if (Character.get(LedSpriteProperty.Y) == 0) {
            if (Character.get(LedSpriteProperty.X) == 2) {
                Character.set(LedSpriteProperty.Y, 3)
                Room = 1
            }
        }
    }
    if (Room == 1) {
        led.plot(1, 0)
        led.plot(1, 1)
        led.plot(1, 2)
        led.plot(1, 3)
        led.plot(1, 4)
        led.plot(3, 0)
        led.plot(3, 1)
        led.plot(3, 2)
        led.plot(3, 3)
        led.plot(3, 4)
        if (Character.get(LedSpriteProperty.X) == 1) {
            Character.set(LedSpriteProperty.X, 2)
        }
        if (Character.get(LedSpriteProperty.X) == 3) {
            Character.set(LedSpriteProperty.X, 2)
        }
        if (Character.get(LedSpriteProperty.Y) == 4) {
            Room = 0
            Character.set(LedSpriteProperty.Y, 1)
        }
        if (Character.get(LedSpriteProperty.Y) == 0) {
            Room = 2
            Character.set(LedSpriteProperty.Y, 3)
        }
    }
    if (Room == 2) {
        led.plot(1, 0)
        led.plot(1, 1)
        led.plot(0, 1)
        led.plot(3, 0)
        led.plot(3, 1)
        led.plot(4, 1)
        led.plot(0, 3)
        led.plot(1, 3)
        led.plot(1, 4)
        led.plot(3, 3)
        led.plot(3, 4)
        led.plot(4, 3)
        if (Key_3_last == 0) {
            led.plot(3, 2)
        }
        if (Character.get(LedSpriteProperty.X) == 3 && Character.get(LedSpriteProperty.Y) == 2) {
            if (Key_3_last == 0) {
                Key_3_last = 1
                score_for_keys += 1
                pause2 = 1
                music.playMelody("- E G B C5 - A G ", 120)
                pause2 = 0
            }
        }
        if (Character.get(LedSpriteProperty.X) == 0) {
            if (Character.get(LedSpriteProperty.Y) == 2) {
                Room = 3
                Character.set(LedSpriteProperty.X, 3)
            }
        }
        if (Character.get(LedSpriteProperty.X) == 2) {
            if (Character.get(LedSpriteProperty.Y) == 0) {
                Character.set(LedSpriteProperty.Y, 3)
                Character.set(LedSpriteProperty.X, 2)
                basic.pause(100)
                Room = 0
            }
        }
        if (Character.get(LedSpriteProperty.X) == 1) {
            if (Character.get(LedSpriteProperty.Y) == 1) {
                Character.set(LedSpriteProperty.X, 2)
                Character.set(LedSpriteProperty.Y, 2)
            }
        }
        if (Character.get(LedSpriteProperty.X) == 3) {
            if (Character.get(LedSpriteProperty.Y) == 1) {
                Character.set(LedSpriteProperty.X, 2)
                Character.set(LedSpriteProperty.Y, 2)
            }
        }
        if (Character.get(LedSpriteProperty.X) == 3) {
            if (Character.get(LedSpriteProperty.Y) == 3) {
                Character.set(LedSpriteProperty.X, 2)
                Character.set(LedSpriteProperty.Y, 2)
            }
        }
        if (Character.get(LedSpriteProperty.X) == 1) {
            if (Character.get(LedSpriteProperty.Y) == 3) {
                Character.set(LedSpriteProperty.X, 2)
                Character.set(LedSpriteProperty.Y, 2)
            }
        }
        if (Character.get(LedSpriteProperty.X) == 4) {
            Room = 3
            Character.set(LedSpriteProperty.X, 1)
        }
        if (Character.get(LedSpriteProperty.Y) == 4) {
            Room = 1
            Character.set(LedSpriteProperty.Y, 1)
        }
    }
    if (Room == 3) {
        led.plot(0, 1)
        led.plot(1, 1)
        led.plot(2, 1)
        led.plot(3, 1)
        led.plot(4, 1)
        led.plot(0, 3)
        led.plot(1, 3)
        led.plot(2, 3)
        led.plot(3, 3)
        led.plot(4, 3)
        if (Character.get(LedSpriteProperty.X) == 1) {
            if (Character.get(LedSpriteProperty.Y) == 4) {
                if (Egg == 0) {
                    Egg = 1
                    pause2 = 1
                    music.playMelody("C5 A C5 G C5 A G C5 ", 120)
                    pause2 = 0
                }
            }
        }
        if (Keys == 0) {
            led.plot(2, 2)
        }
        if (Character.get(LedSpriteProperty.X) == 2 && Character.get(LedSpriteProperty.Y) == 2) {
            if (Keys == 0) {
                Keys = 1
                score_for_keys += 1
                music.playMelody("- E G B C5 - A G ", 120)
            }
        }
        if (Character.get(LedSpriteProperty.Y) == 1) {
            Character.set(LedSpriteProperty.Y, 2)
        }
        if (Character.get(LedSpriteProperty.Y) == 3) {
            Character.set(LedSpriteProperty.Y, 2)
        }
        if (Character.get(LedSpriteProperty.X) == 4) {
            if (Character.get(LedSpriteProperty.Y) == 2) {
                Room = 2
                Character.set(LedSpriteProperty.X, 1)
            }
        }
        if (Character.get(LedSpriteProperty.X) == 0) {
            if (Character.get(LedSpriteProperty.Y) == 2) {
                Room = 2
                Character.set(LedSpriteProperty.X, 3)
            }
        }
    }
    if (Room == 66) {
        led.plot(0, 0)
        led.plot(0, 1)
        led.plot(0, 2)
        led.plot(0, 3)
        led.plot(0, 4)
        led.plot(1, 0)
        led.plot(3, 0)
        led.plot(4, 0)
        led.plot(4, 1)
        led.plot(4, 2)
        led.plot(4, 3)
        led.plot(4, 4)
        if (Pain == 0) {
            led.plot(1, 1)
        }
        if (Character.get(LedSpriteProperty.X) == 1 && Character.get(LedSpriteProperty.Y) == 1) {
            if (Pain == 0) {
                score_for_keys += 1
                Pain = 1
                pause2 = 1
                music.playMelody("- E G B C5 - A G ", 120)
                pause2 = 0
            }
        }
        if (Character.get(LedSpriteProperty.X) == 2) {
            if (Character.get(LedSpriteProperty.Y) == 0) {
                Room = 0
                Character.set(LedSpriteProperty.Y, 3)
            }
        }
        if (Character.get(LedSpriteProperty.X) == 0) {
            Character.set(LedSpriteProperty.X, 1)
        }
        if (Character.get(LedSpriteProperty.X) == 4) {
            Character.set(LedSpriteProperty.X, 3)
        }
        if (Character.get(LedSpriteProperty.Y) == 0) {
            if (Character.get(LedSpriteProperty.X) == 1) {
                Character.set(LedSpriteProperty.Y, 1)
            }
            if (Character.get(LedSpriteProperty.X) == 3) {
                Character.set(LedSpriteProperty.Y, 1)
            }
        }
        if (Character.get(LedSpriteProperty.Y) == 4) {
            Room = 3
            basic.pause(100)
            Character.set(LedSpriteProperty.Y, 0)
        }
    }
})
