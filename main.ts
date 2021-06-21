namespace SpriteKind {
    export const coin = SpriteKind.create()
    export const flower = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (ted.vy == 0) {
        ted.vy = -225
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`nibs`, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`cage`, function (sprite, location) {
    game.over(false, effects.dissolve)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.flower, function (sprite, otherSprite) {
    bee = sprites.create(img`
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
        `, SpriteKind.Enemy)
    otherSprite.destroy()
    animation.runImageAnimation(
    bee,
    assets.animation`bee`,
    300,
    true
    )
    bee.setPosition(ted.x + -60, ted.y + -50)
    bee.follow(ted)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    bee.destroy()
})
let bee: Sprite = null
let flower: Sprite = null
let coin: Sprite = null
let ted: Sprite = null
scene.setBackgroundColor(9)
ted = sprites.create(assets.image`Ted`, SpriteKind.Player)
controller.moveSprite(ted, 200, 0)
tiles.setTilemap(tilemap`level1`)
info.setLife(5)
ted.ay = 600
scene.cameraFollowSprite(ted)
for (let value of tiles.getTilesByType(assets.tile`carrot`)) {
    coin = sprites.create(assets.image`coin`, SpriteKind.coin)
    animation.runImageAnimation(
    coin,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 4 4 4 4 5 5 5 f . . . 
        . f 5 5 5 4 4 5 5 5 5 5 5 f . . 
        . f 5 5 4 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 4 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 4 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 4 4 4 4 5 5 5 5 5 f . . 
        . . f 5 5 5 5 4 4 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . f 5 5 4 4 4 5 5 f . . . . 
        . . f 5 5 5 4 5 5 5 5 5 f . . . 
        . . f 5 5 4 5 5 5 5 5 5 f . . . 
        . . f 5 5 4 5 5 5 5 5 5 f . . . 
        . . f 5 5 4 5 5 5 5 5 5 f . . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . . 
        . . f 5 4 4 4 4 5 5 5 5 f . . . 
        . . . f 5 5 5 4 4 5 5 f . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . f 5 5 4 4 5 f . . . . . 
        . . . f 5 5 5 4 5 5 5 f . . . . 
        . . . f 5 5 4 5 5 5 5 f . . . . 
        . . . f 5 5 4 5 5 5 5 f . . . . 
        . . . f 5 5 4 5 5 5 5 f . . . . 
        . . . f 5 4 5 5 5 5 5 f . . . . 
        . . . f 5 4 5 5 5 5 5 f . . . . 
        . . . f 5 4 4 4 5 5 5 f . . . . 
        . . . . f 5 5 5 4 5 f . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 5 4 5 5 5 f . . . . . 
        . . . . f 5 4 5 5 5 f . . . . . 
        . . . . f 5 4 5 5 5 f . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 4 5 f . . . . . . 
        . . . . . f 5 4 5 f . . . . . . 
        . . . . . f 5 4 5 f . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . f 5 . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . . f 5 4 5 5 f . . . . . 
        . . . . . f 5 4 5 5 f . . . . . 
        . . . . . f 5 4 5 5 f . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . . f 5 5 4 5 5 5 f . . . . 
        . . . . f 5 5 4 5 5 5 f . . . . 
        . . . . f 5 5 4 5 5 5 f . . . . 
        . . . . f 5 4 5 5 5 5 f . . . . 
        . . . . f 5 4 5 5 5 5 f . . . . 
        . . . . f 5 4 4 5 5 5 f . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . f 5 5 4 4 5 5 f . . . . 
        . . . f 5 5 5 4 5 5 5 5 f . . . 
        . . . f 5 5 4 5 5 5 5 5 f . . . 
        . . . f 5 5 4 5 5 5 5 5 f . . . 
        . . . f 5 5 4 5 5 5 5 5 f . . . 
        . . . f 5 4 5 5 5 5 5 5 f . . . 
        . . . f 5 4 5 5 5 5 5 5 f . . . 
        . . . f 5 4 4 4 5 5 5 5 f . . . 
        . . . . f 5 5 5 4 5 5 f . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . f 5 5 4 4 4 5 5 f . . . . 
        . . f 5 5 5 4 5 5 5 5 5 f . . . 
        . . f 5 5 4 5 5 5 5 5 5 f . . . 
        . . f 5 5 4 5 5 5 5 5 5 f . . . 
        . . f 5 5 4 5 5 5 5 5 5 f . . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . . 
        . . f 5 4 4 4 4 5 5 5 5 f . . . 
        . . . f 5 5 5 4 4 5 5 f . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 4 4 4 4 5 5 5 f . . . 
        . f 5 5 5 4 4 5 5 5 5 5 5 f . . 
        . f 5 5 4 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 4 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 4 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 4 4 4 4 5 5 5 5 5 f . . 
        . . f 5 5 5 5 4 4 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    tiles.placeOnTile(coin, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value of tiles.getTilesByType(assets.tile`bad-guy`)) {
    flower = sprites.create(assets.image`flower`, SpriteKind.flower)
    tiles.placeOnTile(flower, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
