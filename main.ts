enum JacDacMessage {
    message1 = 49434
}
namespace SpriteKind {
    export const Screen = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
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
    screenState = 1
}
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
bootScreenConsole()
