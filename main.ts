enum JacDacMessage {
    message1 = 49434
}
namespace SpriteKind {
    export const Screen = SpriteKind.create()
    export const Logo = SpriteKind.create()
}
function serviceManager () {
    if (powerState == 0) {
        jacdac.messageBusService.start()
    } else if (powerState == 1) {
        jacdac.messageBusService.stop()
    }
}
function startupScreen () {
    scene.setBackgroundColor(7)
    mySprite = sprites.create(img`
. . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f . . . . . . 
. . . . . . . . . f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f . . . . . . 
. . . . . . . . . f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f . . . . . . 
. . . . . . f f f 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 f f f . . . 
. . . . . . f f f 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 f f f . . . 
. . . . . . f f f 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 f f f . . . 
. . . . . . f f f 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 f f f . . . 
. . . . . . f f f 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 f f f . . . 
. . . . . . f f f 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 f f f . . . 
. . . f f f 9 9 9 7 7 7 7 7 7 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 7 7 7 7 7 7 9 9 9 f f f 
. . . f f f 9 9 9 7 7 7 7 7 7 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 7 7 7 7 7 7 9 9 9 f f f 
. . . f f f 9 9 9 7 7 7 7 7 7 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 7 7 7 7 7 7 9 9 9 f f f 
. . . f f f 9 9 9 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 9 9 9 f f f 
. . . f f f 9 9 9 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 9 9 9 f f f 
. . . f f f 9 9 9 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 9 9 9 f f f 
. . . f f f 9 9 9 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 9 9 9 f f f 
. . . f f f 9 9 9 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 9 9 9 f f f 
. . . f f f 9 9 9 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 9 9 9 f f f 
. . . f f f 9 9 9 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 9 9 9 f f f 
. . . f f f 9 9 9 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 9 9 9 f f f 
. . . f f f 9 9 9 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 9 9 9 f f f 
. . . f f f 6 6 6 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 6 6 6 f f f 
. . . f f f 6 6 6 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 6 6 6 f f f 
. . . f f f 6 6 6 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 6 6 6 f f f 
. . . f f f 6 6 6 6 6 6 7 7 7 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 7 7 7 6 6 6 6 6 6 f f f 
. . . f f f 6 6 6 6 6 6 7 7 7 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 7 7 7 6 6 6 6 6 6 f f f 
. . . f f f 6 6 6 6 6 6 7 7 7 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 7 7 7 6 6 6 6 6 6 f f f 
. . . f f f 6 6 6 6 6 6 d d d 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 d d d 6 6 6 6 6 6 f f f 
. . . f f f 6 6 6 6 6 6 d d d 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 d d d 6 6 6 6 6 6 f f f 
. . . f f f 6 6 6 6 6 6 d d d 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 d d d 6 6 6 6 6 6 f f f 
. . . . . . f f f d d d d d d 6 6 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 d d d d d d f f f . . . 
. . . . . . f f f d d d d d d 6 6 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 d d d d d d f f f . . . 
. . . . . . f f f d d d d d d 6 6 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 d d d d d d f f f . . . 
. . . . . . f f f d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d f f f . . . 
. . . . . . f f f d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d f f f . . . 
. . . . . . f f f d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d f f f . . . 
. . . . . . . . . f f f f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f f f f . . . . . . 
. . . . . . . . . f f f f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f f f f . . . . . . 
. . . . . . . . . f f f f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f f f f . . . . . . 
. . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Logo)
}
function bootLoader () {
    powerState = 0
    pause(500)
    startupScreen()
}
function bootScreenConsole () {
    game.setDialogFrame(img`
f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f 
`)
    game.setDialogCursor(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    game.setDialogTextColor(1)
    game.showLongText("Xbox 86_32   Build 0.0.1 Press A button      to continue", DialogLayout.Top)
    bootLoader()
}
let mySprite: Sprite = null
let powerState = 0
let screenState = 0
game.setDialogFrame(img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 f f f f f f f f f f f f f 1 
1 f f f f f f f f f f f f f 1 
1 f f f f f f f f f f f f f 1 
1 f f f f f f f f f f f f f 1 
1 f f f f f f f f f f f f f 1 
1 f f f f f f f f f f f f f 1 
1 f f f f f f f f f f f f f 1 
1 f f f f f f f f f f f f f 1 
1 f f f f f f f f f f f f f 1 
1 f f f f f f f f f f f f f 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 c c c c c c c c c c c c c 1 
1 c c c c c c c c c c c c c 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`)
game.setDialogTextColor(1)
game.showLongText("HDMI 2", DialogLayout.Top)
pause(500)
bootScreenConsole()
