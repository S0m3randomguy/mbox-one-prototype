enum ActionKind {
    Walking,
    Idle,
    Jumping
}
enum JacDacMessage {
    message1 = 49434
}
namespace SpriteKind {
    export const Screen = SpriteKind.create()
    export const Logo = SpriteKind.create()
    export const Text = SpriteKind.create()
    export const Tile = SpriteKind.create()
}
function serviceManager () {
    if (powerState == 0) {
        jacdac.messageBusService.start()
    } else if (powerState == 1) {
        jacdac.messageBusService.stop()
    }
}
function bootLoader () {
    powerState = 0
    pause(500)
    startupScreen()
}
function startScreen () {
    xboxLogo.destroy()
    xboxText.destroy()
    scene.setBackgroundColor(7)
    color.FadeToWhite.startScreenEffect()
    setupTile = sprites.create(img`
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 7 7 7 7 7 7 7 7 f f f 7 7 7 f f f 7 7 7 f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 
6 6 6 7 7 7 7 7 7 7 7 f f f 7 7 7 f f f 7 7 7 f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 
6 6 6 7 7 7 7 7 7 7 7 f f f 7 7 7 f f f 7 7 7 f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 
6 6 6 7 7 7 7 7 7 7 7 f f f 7 7 7 f f f 7 7 7 f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 
6 6 6 7 7 7 7 7 7 7 7 f f f 7 7 7 f f f 7 7 7 f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 
6 6 6 7 7 7 7 7 7 7 7 f f f 7 7 7 f f f 7 7 7 f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 
6 6 6 7 7 7 7 7 7 7 7 f f f 7 7 7 f f f 7 7 7 f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 
6 6 6 7 7 7 7 7 7 7 7 f f f 7 7 7 f f f 7 7 7 f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 
6 6 6 7 7 7 7 7 7 7 7 f f f f f f f f f 7 7 7 f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 
6 6 6 7 7 7 7 7 7 7 7 f f f f f f f f f 7 7 7 f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 
6 6 6 7 7 7 7 7 7 7 7 f f f f f f f f f 7 7 7 f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 
6 6 6 7 7 7 7 7 7 7 7 f f f 7 7 7 f f f 7 7 7 f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 
6 6 6 7 7 7 7 7 7 7 7 f f f 7 7 7 f f f 7 7 7 f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 
6 6 6 7 7 7 7 7 7 7 7 f f f 7 7 7 f f f 7 7 7 f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 
6 6 6 7 7 7 7 7 7 7 7 f f f 7 7 7 f f f 7 7 7 f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 
6 6 6 7 7 7 7 7 7 7 7 f f f 7 7 7 f f f 7 7 7 f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 
6 6 6 7 7 7 7 7 7 7 7 f f f 7 7 7 f f f 7 7 7 f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 
6 6 6 7 7 7 7 7 7 7 7 f f f 7 7 7 f f f 7 7 7 f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
`, SpriteKind.Tile)
}
function startupScreen () {
    scene.setBackgroundColor(7)
    xboxText = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . 1 . . . 1 . 1 1 1 1 . . . 1 1 1 . . 1 . . . 1 . . . . 1 1 1 . . 1 . . . 1 . 1 1 1 1 1 . . . . . . . . . . . . . 
. . . . . . . . . 1 . 1 . . 1 . . . 1 . 1 . . . 1 . . 1 . 1 . . . . 1 . . . 1 . 1 1 . . 1 . 1 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . 1 . . . 1 1 1 1 . . 1 . . . 1 . . . 1 . . . . . 1 . . . 1 . 1 . 1 . 1 . 1 1 1 . . . . . . . . . . . . . . . 
. . . . . . . . . 1 . 1 . . 1 . . . 1 . 1 . . . 1 . . 1 . 1 . . . . 1 . . . 1 . 1 . . 1 1 . 1 . . . . . . . . . . . . . . . . . 
. . . . . . . . 1 . . . 1 . 1 . . . 1 . 1 . . . 1 . 1 . . . 1 . . . 1 . . . 1 . 1 . . . 1 . 1 . . . . . . . . . . . . . . . . . 
. . . . . . . . 1 . . . 1 . 1 . . . 1 . 1 . . . 1 . 1 . . . 1 . . . 1 . . . 1 . 1 . . . 1 . 1 . . . . . . . . . . . . . . . . . 
. . . . . . . . 1 . . . 1 . 1 1 1 1 . . . 1 1 1 . . 1 . . . 1 . . . . 1 1 1 . . 1 . . . 1 . 1 1 1 1 1 . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Text)
    xboxText.setPosition(85, 91)
    pause(1250)
    xboxLogo = sprites.create(img`
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
    xboxLogo.setPosition(10, 120)
    animation.runMovementAnimation(
    xboxLogo,
    animation.animationPresets(animation.flyToCenter),
    250,
    false
    )
    pause(3000)
    animation.runMovementAnimation(
    xboxLogo,
    animation.animationPresets(animation.easeDown),
    1100,
    false
    )
    pause(1600)
    startScreen()
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
let setupTile: Sprite = null
let xboxText: Sprite = null
let xboxLogo: Sprite = null
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
serviceManager()
pause(500)
bootScreenConsole()
