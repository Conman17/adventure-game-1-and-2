input.onButtonPressed(Button.A, function () {
    if (Game_1 == 0 && Game_2 == 0) {
        Game_1 = 1
        basic.pause(100)
    }
    if (Game_1 == 1) {
        Character.change(LedSpriteProperty.X, -1)
    }
    if (Game_2 == 1) {
        Character.change(LedSpriteProperty.X, -1)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Game_1 == 1) {
        Character.change(LedSpriteProperty.Y, 1)
    }
    if (Game_2 == 1) {
        Character.change(LedSpriteProperty.Y, 1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (Game_1 == 0 && Game_2 == 0) {
        Game_2 = 1
        basic.pause(100)
    }
    if (Game_1 == 1) {
        Character.change(LedSpriteProperty.X, 1)
    }
    if (Game_2 == 1) {
        Character.change(LedSpriteProperty.X, 1)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (Game_1 == 1) {
        Character.change(LedSpriteProperty.Y, -1)
    }
    if (Game_2 == 1) {
        Character.change(LedSpriteProperty.Y, -1)
    }
})
let Pain = 0
let Keys = 0
let Key_3_last = 0
let sound1 = 0
let Egg = 0
let Room = 0
let Time_Passed = 0
let score_for_keys = 0
let Show = 0
let Actual_egg = 0
let string = 0
let Room_5 = 0
let Room_4 = 0
let Room_3 = 0
let Variable = 0
let Point = 0
let Game_2 = 0
let Game_1 = 0
let Character: game.LedSprite = null
let Key_1 = 0
let Key2 = 0
let Key_3 = 0
let Start_Time = input.runningTime()
Character = game.createSprite(2, 2)
Game_1 = 0
Game_2 = 0
basic.forever(function () {
    if (Game_1 == 1) {
        if (Point == 3) {
            basic.showString("YOU WIN")
            Character.set(LedSpriteProperty.X, 2)
            Character.set(LedSpriteProperty.Y, 2)
            Variable = 0
            Point = 0
            Room_3 = 0
            Room_4 = 0
            Room_5 = 0
            if (string == 1) {
                string = 2
            } else {
                string = 0
            }
        }
        if (Variable == 0) {
            led.plot(0, 0)
            led.plot(1, 0)
            led.plot(3, 0)
            led.plot(4, 0)
            led.plot(0, 4)
            led.plot(1, 4)
            led.plot(2, 4)
            led.plot(3, 4)
            led.plot(4, 4)
            if (Character.get(LedSpriteProperty.Y) == 4) {
                if (Character.get(LedSpriteProperty.X) == 0) {
                    game.gameOver()
                } else if (Character.get(LedSpriteProperty.X) == 1) {
                    game.gameOver()
                } else if (Character.get(LedSpriteProperty.X) == 2) {
                    game.gameOver()
                } else if (Character.get(LedSpriteProperty.X) == 3) {
                    game.gameOver()
                } else {
                    if (Character.get(LedSpriteProperty.X) == 4) {
                        game.gameOver()
                    }
                }
            }
            if (Character.get(LedSpriteProperty.Y) == 0) {
                if (Character.get(LedSpriteProperty.X) == 0) {
                    game.gameOver()
                } else if (Character.get(LedSpriteProperty.X) == 3) {
                    game.gameOver()
                } else if (Character.get(LedSpriteProperty.X) == 4) {
                    game.gameOver()
                } else {
                    if (Character.get(LedSpriteProperty.X) == 1) {
                        game.gameOver()
                    }
                }
            }
            if (Character.get(LedSpriteProperty.X) == 0) {
                Variable = 1
                Character.set(LedSpriteProperty.X, 3)
            }
            if (Character.get(LedSpriteProperty.X) == 4) {
                Character.set(LedSpriteProperty.X, 1)
                Variable = 4
            }
            if (Character.get(LedSpriteProperty.X) == 2) {
                if (Character.get(LedSpriteProperty.Y) == 0) {
                    Character.set(LedSpriteProperty.Y, 3)
                    Variable = 3
                }
            }
        }
        if (Variable == 1) {
            led.plot(0, 0)
            led.plot(1, 0)
            led.plot(2, 0)
            led.plot(4, 0)
            led.plot(0, 1)
            led.plot(0, 2)
            led.plot(0, 3)
            led.plot(0, 4)
            led.plot(1, 4)
            led.plot(2, 4)
            led.plot(3, 4)
            led.plot(4, 4)
            if (string == 2) {
                Variable = 92
                basic.pause(500)
                Character.set(LedSpriteProperty.Y, 3)
            }
            if (Character.get(LedSpriteProperty.X) == 0) {
                if (Character.get(LedSpriteProperty.Y) == 1) {
                    if (string == 1) {
                        Variable = 17
                        Character.set(LedSpriteProperty.X, 3)
                        Character.set(LedSpriteProperty.Y, 1)
                    } else {
                        game.gameOver()
                    }
                }
            }
            if (Character.get(LedSpriteProperty.X) == 4) {
                Character.set(LedSpriteProperty.X, 1)
                Variable = 0
            }
            if (Character.get(LedSpriteProperty.X) == 3) {
                if (Character.get(LedSpriteProperty.Y) == 0) {
                    Character.set(LedSpriteProperty.Y, 3)
                    Variable = 2
                }
            }
            if (Character.get(LedSpriteProperty.Y) == 4) {
                if (Character.get(LedSpriteProperty.X) == 0) {
                    game.gameOver()
                } else if (Character.get(LedSpriteProperty.X) == 1) {
                    game.gameOver()
                } else if (Character.get(LedSpriteProperty.X) == 2) {
                    game.gameOver()
                } else if (Character.get(LedSpriteProperty.X) == 3) {
                    game.gameOver()
                } else {
                    if (Character.get(LedSpriteProperty.X) == 4) {
                        game.gameOver()
                    }
                }
            }
            if (Character.get(LedSpriteProperty.Y) == 0) {
                if (Character.get(LedSpriteProperty.X) == 2) {
                    game.gameOver()
                } else if (Character.get(LedSpriteProperty.X) == 4) {
                    game.gameOver()
                } else if (Character.get(LedSpriteProperty.X) == 0) {
                    game.gameOver()
                } else {
                    if (Character.get(LedSpriteProperty.X) == 1) {
                        game.gameOver()
                    }
                }
            }
            if (Character.get(LedSpriteProperty.X) == 0) {
                if (Character.get(LedSpriteProperty.Y) == 3) {
                    game.gameOver()
                } else {
                    if (Character.get(LedSpriteProperty.Y) == 2) {
                        game.gameOver()
                    }
                }
            }
        }
        if (Variable == 2) {
            led.plot(0, 4)
            led.plot(0, 3)
            led.plot(0, 2)
            led.plot(0, 1)
            led.plot(0, 0)
            led.plot(1, 4)
            led.plot(2, 4)
            led.plot(4, 4)
            led.plot(1, 0)
            led.plot(2, 0)
            led.plot(3, 0)
            led.plot(4, 0)
            led.plot(4, 1)
            led.plot(4, 2)
            led.plot(4, 3)
            if (Character.get(LedSpriteProperty.X) == 0) {
                if (Character.get(LedSpriteProperty.Y) == 0) {
                    game.gameOver()
                } else if (Character.get(LedSpriteProperty.Y) == 1) {
                    game.gameOver()
                } else if (Character.get(LedSpriteProperty.Y) == 3) {
                    game.gameOver()
                } else if (Character.get(LedSpriteProperty.Y) == 4) {
                    game.gameOver()
                } else {
                    if (Character.get(LedSpriteProperty.Y) == 2) {
                        game.gameOver()
                    }
                }
            } else if (Character.get(LedSpriteProperty.Y) == 4) {
                if (Character.get(LedSpriteProperty.X) == 0) {
                    game.gameOver()
                } else if (Character.get(LedSpriteProperty.X) == 2) {
                    game.gameOver()
                } else {
                    if (Character.get(LedSpriteProperty.X) == 4) {
                        game.gameOver()
                    }
                }
            } else {
                if (Character.get(LedSpriteProperty.X) == 4) {
                    game.gameOver()
                }
                if (Character.get(LedSpriteProperty.Y) == 0) {
                    if (Character.get(LedSpriteProperty.X) == 1) {
                        game.gameOver()
                    } else if (Character.get(LedSpriteProperty.X) == 2) {
                        game.gameOver()
                    } else if (Character.get(LedSpriteProperty.X) == 3) {
                        game.gameOver()
                    } else {
                        if (Character.get(LedSpriteProperty.X) == 4) {
                            game.gameOver()
                        }
                    }
                }
            }
            if (Character.get(LedSpriteProperty.Y) == 4) {
                if (Character.get(LedSpriteProperty.X) == 3) {
                    Character.set(LedSpriteProperty.Y, 1)
                    Variable = 1
                }
            }
            if (Character.get(LedSpriteProperty.X) == 1) {
                if (Character.get(LedSpriteProperty.Y) == 2) {
                    if (Room_3 == 0) {
                        Room_3 += 1
                        Point += 1
                        basic.showIcon(IconNames.Yes)
                    }
                }
            }
            if (Point == 2) {
                if (Character.get(LedSpriteProperty.X) == 1) {
                    if (Character.get(LedSpriteProperty.Y) == 4) {
                        string = 1
                    }
                }
            } else {
                if (Character.get(LedSpriteProperty.X) == 1) {
                    if (Character.get(LedSpriteProperty.Y) == 4) {
                        game.gameOver()
                    }
                }
            }
        }
        if (Variable == 3) {
            led.plot(0, 4)
            led.plot(0, 3)
            led.plot(0, 2)
            led.plot(0, 1)
            led.plot(0, 0)
            led.plot(1, 4)
            led.plot(3, 4)
            led.plot(4, 4)
            led.plot(1, 0)
            led.plot(2, 0)
            led.plot(3, 0)
            led.plot(4, 0)
            led.plot(4, 1)
            led.plot(4, 2)
            led.plot(4, 3)
            if (Actual_egg == 1) {
                Variable = 32
                basic.pause(500)
                basic.showString("CONGRADULATIONS!!!")
                basic.pause(500)
                Character.set(LedSpriteProperty.X, 2)
                Character.set(LedSpriteProperty.X, 2)
                Variable = 0
                Actual_egg = 0
            }
            if (Character.get(LedSpriteProperty.Y) == 4) {
                if (Character.get(LedSpriteProperty.X) == 1) {
                    game.gameOver()
                }
                if (Character.get(LedSpriteProperty.X) == 3) {
                    game.gameOver()
                }
            }
            if (Character.get(LedSpriteProperty.Y) == 0) {
                if (Character.get(LedSpriteProperty.X) == 0) {
                    game.gameOver()
                }
                if (Character.get(LedSpriteProperty.X) == 1) {
                    game.gameOver()
                }
                if (Character.get(LedSpriteProperty.X) == 3) {
                    game.gameOver()
                }
                if (Character.get(LedSpriteProperty.X) == 4) {
                    game.gameOver()
                }
            }
            if (Character.get(LedSpriteProperty.Y) == 0) {
                game.gameOver()
            }
            if (Character.get(LedSpriteProperty.X) == 0) {
                game.gameOver()
            }
            if (Character.get(LedSpriteProperty.X) == 4) {
                game.gameOver()
            }
            if (Character.get(LedSpriteProperty.X) == 3) {
                if (Character.get(LedSpriteProperty.Y) == 1) {
                    if (Room_4 == 0) {
                        Room_4 += 1
                        Point += 1
                        basic.showIcon(IconNames.Yes)
                    }
                }
            }
            if (Character.get(LedSpriteProperty.X) == 2) {
                if (Character.get(LedSpriteProperty.Y) == 4) {
                    Character.set(LedSpriteProperty.Y, 1)
                    Variable = 0
                }
            }
        }
        if (Variable == 4) {
            led.plot(0, 0)
            led.plot(1, 0)
            led.plot(2, 0)
            led.plot(3, 0)
            led.plot(4, 0)
            led.plot(4, 1)
            led.plot(4, 2)
            led.plot(4, 3)
            led.plot(4, 4)
            led.plot(3, 4)
            led.plot(2, 4)
            led.plot(1, 4)
            led.plot(0, 4)
            if (Character.get(LedSpriteProperty.Y) == 0) {
                game.gameOver()
            }
            if (Character.get(LedSpriteProperty.Y) == 4) {
                game.gameOver()
            }
            if (Character.get(LedSpriteProperty.X) == 4) {
                game.gameOver()
            }
            if (Character.get(LedSpriteProperty.X) == 2) {
                if (Character.get(LedSpriteProperty.Y) == 3) {
                    if (Room_5 == 0) {
                        basic.showIcon(IconNames.Yes)
                        Room_5 += 1
                        Point += 1
                    }
                }
            }
            if (Character.get(LedSpriteProperty.X) == 0) {
                Character.set(LedSpriteProperty.X, 3)
                Variable = 0
            }
        }
        if (Variable == 17) {
            led.plot(4, 0)
            led.plot(4, 2)
            led.plot(4, 3)
            led.plot(4, 4)
            led.plot(3, 0)
            led.plot(2, 0)
            led.plot(1, 0)
            led.plot(0, 0)
            led.plot(2, 1)
            led.plot(2, 2)
            led.plot(2, 3)
            led.plot(0, 4)
            led.plot(0, 3)
            led.plot(0, 2)
            led.plot(2, 4)
            if (Character.get(LedSpriteProperty.X) == 3) {
                if (Character.get(LedSpriteProperty.Y) == 4) {
                    Variable = 27
                    basic.pause(100)
                    Character.set(LedSpriteProperty.X, 3)
                    Character.set(LedSpriteProperty.Y, 1)
                }
            }
            if (Character.get(LedSpriteProperty.X) == 4) {
                if (Character.get(LedSpriteProperty.Y) == 4) {
                    game.gameOver()
                }
                if (Character.get(LedSpriteProperty.Y) == 3) {
                    game.gameOver()
                }
                if (Character.get(LedSpriteProperty.Y) == 2) {
                    game.gameOver()
                }
            }
            if (Character.get(LedSpriteProperty.X) == 0) {
                if (Character.get(LedSpriteProperty.Y) == 2) {
                    game.gameOver()
                }
                if (Character.get(LedSpriteProperty.Y) == 3) {
                    game.gameOver()
                }
                if (Character.get(LedSpriteProperty.Y) == 4) {
                    game.gameOver()
                }
            }
            if (Character.get(LedSpriteProperty.X) == 2) {
                if (Character.get(LedSpriteProperty.Y) == 1) {
                    game.gameOver()
                }
                if (Character.get(LedSpriteProperty.Y) == 3) {
                    game.gameOver()
                }
            }
            if (Character.get(LedSpriteProperty.Y) == 4) {
                if (Character.get(LedSpriteProperty.X) == 2) {
                    game.gameOver()
                }
                if (Character.get(LedSpriteProperty.X) == 1) {
                    game.gameOver()
                }
            }
            if (Character.get(LedSpriteProperty.Y) == 0) {
                game.gameOver()
            }
            if (Character.get(LedSpriteProperty.X) == 4) {
                if (Character.get(LedSpriteProperty.Y) == 1) {
                    Variable = 0
                    Character.set(LedSpriteProperty.Y, 2)
                    Character.set(LedSpriteProperty.X, 2)
                }
            }
            if (Character.get(LedSpriteProperty.X) == 0) {
                if (Character.get(LedSpriteProperty.Y) == 1) {
                    Variable = 32
                    basic.pause(500)
                    basic.showString("CREATED BY CONNOR INGERSOLL")
                    string = 0
                    Character.set(LedSpriteProperty.X, 2)
                    Character.set(LedSpriteProperty.Y, 2)
                }
            }
        }
        if (Variable == 32) {
            if (Character.get(LedSpriteProperty.X) == 0) {
                Variable = 0
                Character.set(LedSpriteProperty.X, 2)
                Character.set(LedSpriteProperty.Y, 2)
            }
            if (Character.get(LedSpriteProperty.X) == 4) {
                Variable = 0
                Character.set(LedSpriteProperty.X, 2)
                Character.set(LedSpriteProperty.Y, 2)
            }
            if (Character.get(LedSpriteProperty.Y) == 4) {
                Variable = 0
                Character.set(LedSpriteProperty.X, 2)
                Character.set(LedSpriteProperty.Y, 2)
            }
            if (Character.get(LedSpriteProperty.Y) == 0) {
                Variable = 0
                Character.set(LedSpriteProperty.X, 2)
                Character.set(LedSpriteProperty.Y, 2)
            }
        }
        if (Variable == 27) {
            led.plot(1, 4)
            if (Character.get(LedSpriteProperty.X) == 1) {
                if (Character.get(LedSpriteProperty.Y) == 4) {
                    Variable = 0
                    Point = 0
                    string = 0
                    Character.set(LedSpriteProperty.X, 2)
                    Character.set(LedSpriteProperty.Y, 2)
                }
            }
        }
        if (Variable == 92) {
            led.plot(0, 0)
            led.plot(1, 0)
            led.plot(2, 0)
            led.plot(3, 0)
            led.plot(4, 0)
            led.plot(0, 1)
            led.plot(0, 3)
            led.plot(0, 4)
            led.plot(4, 4)
            led.plot(3, 4)
            led.plot(2, 4)
            led.plot(1, 4)
            led.plot(4, 0)
            if (Character.get(LedSpriteProperty.X) == 4) {
                Variable = 0
                Character.set(LedSpriteProperty.X, 2)
                Character.set(LedSpriteProperty.Y, 2)
            }
            if (Character.get(LedSpriteProperty.X) == 0) {
                if (Character.get(LedSpriteProperty.Y) == 2) {
                    Variable = 0
                    Character.set(LedSpriteProperty.Y, 2)
                    Character.set(LedSpriteProperty.X, 2)
                }
            }
            if (Character.get(LedSpriteProperty.X) == 2) {
                if (Character.get(LedSpriteProperty.Y) == 0) {
                    Variable = 663
                    basic.pause(500)
                    Character.set(LedSpriteProperty.X, 2)
                    Character.set(LedSpriteProperty.Y, 3)
                }
            }
        }
        if (Variable == 663) {
            if (Show == 0) {
                led.plot(2, 2)
            }
            if (Character.get(LedSpriteProperty.X) == 2) {
                if (Character.get(LedSpriteProperty.Y) == 2) {
                    Show = 1
                    Actual_egg = 1
                }
            }
            if (Character.get(LedSpriteProperty.X) == 0) {
                Variable = 0
                basic.pause(200)
                Character.set(LedSpriteProperty.X, 2)
                Character.set(LedSpriteProperty.Y, 2)
            }
            if (Character.get(LedSpriteProperty.X) == 4) {
                Variable = 0
                basic.pause(200)
                Character.set(LedSpriteProperty.X, 2)
                Character.set(LedSpriteProperty.Y, 2)
            }
            if (Character.get(LedSpriteProperty.Y) == 0) {
                Variable = 0
                basic.pause(200)
                Character.set(LedSpriteProperty.X, 2)
                Character.set(LedSpriteProperty.Y, 2)
            }
            if (Character.get(LedSpriteProperty.Y) == 4) {
                Variable = 0
                basic.pause(200)
                Character.set(LedSpriteProperty.X, 2)
                Character.set(LedSpriteProperty.Y, 2)
            }
        }
    }
})
basic.forever(function () {
    if (Game_2 == 1) {
        if (score_for_keys == 3) {
            Time_Passed = (input.runningTime() - Start_Time) / 1000
            basic.clearScreen()
            basic.showString("YOU WIN")
            basic.clearScreen()
            basic.showString("" + (Time_Passed))
            basic.clearScreen()
            basic.showString("Seconds")
            game.setScore(3)
            game.gameOver()
        }
        if (Room == 0) {
            led.setDisplayMode(DisplayMode.BlackAndWhite)
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
                basic.clearScreen()
                music.playMelody("C5 C5 A B C5 A G E ", 120)
                music.playMelody("C C E D C E F A ", 120)
                sound1 = 0
                basic.pause(500)
                Time_Passed = (input.runningTime() - Start_Time) / 1000
                basic.showString("TRUE WINNER")
                basic.clearScreen()
                basic.showString("" + (Time_Passed))
                basic.clearScreen()
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
            led.setDisplayMode(DisplayMode.BlackAndWhite)
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
            led.setDisplayMode(DisplayMode.BlackAndWhite)
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
                    music.playMelody("- E G B C5 - A G ", 120)
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
            if (score_for_keys == 2) {
                if (Character.get(LedSpriteProperty.X) == 0) {
                    if (Character.get(LedSpriteProperty.Y) == 0) {
                        if (Egg == 0) {
                            Egg = 1
                            music.playMelody("C5 A C5 G C5 A G C5 ", 120)
                        }
                    }
                }
            } else {
                if (Character.get(LedSpriteProperty.X) == 1) {
                    if (Character.get(LedSpriteProperty.Y) == 1) {
                        Character.set(LedSpriteProperty.X, 2)
                        Character.set(LedSpriteProperty.Y, 2)
                    }
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
            led.setDisplayMode(DisplayMode.BlackAndWhite)
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
            led.setDisplayMode(DisplayMode.BlackAndWhite)
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
                    Pain = 1
                    music.playMelody("- E G B C5 - A G ", 120)
                    score_for_keys += 1
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
    }
})
