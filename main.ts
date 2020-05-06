enum JacDacMessage {
    message1 = 49434
}
namespace SpriteKind {
    export const Screen = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
console.log("Xbox x86_32")
console.log("Build: 0.0.1")
console.log("Starting...")
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
