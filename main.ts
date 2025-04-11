namespace SpriteKind {
    export const payer = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Food, SpriteKind.payer, function (sprite, otherSprite) {
    info.player2.changeScoreBy(1)
})
info.player2.onScore(100, function () {
    myEnemy = sprites.create(img`
        . . . . c c c c c c . . . . . . 
        . . . c 6 7 7 7 7 6 c . . . . . 
        . . c 7 7 7 7 7 7 7 7 c . . . . 
        . c 6 7 7 7 7 7 7 7 7 6 c . . . 
        . c 7 c 6 6 6 6 c 7 7 7 c . . . 
        . f 7 6 f 6 6 f 6 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . . f 7 7 7 7 6 c 7 7 6 f c . . 
        . . . f c c c c 7 7 6 f 7 7 c . 
        . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
        . c 7 7 2 7 7 c f c 6 7 7 6 c c 
        c 1 1 1 1 7 6 f c c 6 6 6 c . . 
        f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
        f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
        . f 6 1 1 1 1 1 1 6 6 6 f . . . 
        . . c c c c c c c c c f . . . . 
        `, SpriteKind.Enemy)
    myEnemy.follow(mySprite)
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Player, function (sprite, otherSprite) {
    info.player1.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.player1.changeLifeBy(-1)
})
info.player1.onScore(100, function () {
    mysprite2 = sprites.create(img`
        . . . . c c c c c c . . . . . . 
        . . . c 6 7 7 7 7 6 c . . . . . 
        . . c 7 7 7 7 7 7 7 7 c . . . . 
        . c 6 7 7 7 7 7 7 7 7 6 c . . . 
        . c 7 c 6 6 6 6 c 7 7 7 c . . . 
        . f 7 6 f 6 6 f 6 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . . f 7 7 7 7 6 c 7 7 6 f c . . 
        . . . f c c c c 7 7 6 f 7 7 c . 
        . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
        . c 7 7 2 7 7 c f c 6 7 7 6 c c 
        c 1 1 1 1 7 6 f c c 6 6 6 c . . 
        f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
        f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
        . f 6 1 1 1 1 1 1 6 6 6 f . . . 
        . . c c c c c c c c c f . . . . 
        `, SpriteKind.Enemy)
    mysprite2.follow(mySprite)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.payer, function (sprite, otherSprite) {
    info.player2.changeLifeBy(-1)
})
let myEnemy: Sprite = null
let mysprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . b b b . . . 
    . . . . . . . . b e e 3 3 b . . 
    . . . . . . b b e 3 2 e 3 a . . 
    . . . . b b 3 3 e 2 2 e 3 3 a . 
    . . b b 3 3 3 3 3 e e 3 3 3 a . 
    b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
    b 3 3 3 d d d d 3 3 3 3 3 d d a 
    b b b b b b b 3 d d d d d d 3 a 
    b d 5 5 5 5 d b b b a a a a a a 
    b 3 d d 5 5 5 5 5 5 5 d d d d a 
    b 3 3 3 3 3 3 d 5 5 5 d d d d a 
    b 3 d 5 5 5 3 3 3 3 3 3 b b b a 
    b b b 3 d 5 5 5 5 5 5 5 d d b a 
    . . . b b b 3 d 5 5 5 5 d d 3 a 
    . . . . . . b b b b 3 d d d b a 
    . . . . . . . . . . b b b a a . 
    `, SpriteKind.Food)
mysprite2 = sprites.create(img`
    . . . . . . . . . . b b b . . . 
    . . . . . . . . b f f 3 3 b . . 
    . . . . . . b b f d f f 3 a . . 
    . . . . b b 3 3 f f f f 3 3 a . 
    . . b b 3 3 3 3 3 f f 3 3 3 a . 
    b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
    b 3 3 3 d d d d 3 3 3 3 3 d d a 
    b b b b b b b 3 d d d d d d 3 a 
    b d 5 5 5 5 d b b b a a a a a a 
    b 3 d d 5 5 5 5 5 5 5 d d d d a 
    b 3 3 3 3 3 3 d 5 5 5 d d d d a 
    b 3 d 5 5 5 3 3 3 3 3 3 b b b a 
    b b b 3 d 5 5 5 5 5 5 5 d d b a 
    . . . b b b 3 d 5 5 5 5 d d 3 a 
    . . . . . . b b b b 3 d d d b a 
    . . . . . . . . . . b b b a a . 
    `, SpriteKind.Enemy)
tiles.placeOnRandomTile(mySprite, assets.tile`transparency16`)
tiles.placeOnRandomTile(mySprite, assets.tile`transparency16`)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f 1 1 1 1 1 3 f . . . . 
    . . . f 1 3 3 3 3 3 1 3 f . . . 
    . . . f 3 3 f f f f 3 1 f . . . 
    . . . f 3 f f d d f f 3 f . . . 
    . . f 3 f d f d d f d f 3 f . . 
    . . f 3 f d 3 d d 3 d f 3 f . . 
    . . f 3 3 f d d d d f 3 3 f . . 
    . f 3 3 f f f d d f f f 3 3 f . 
    . . f f f 3 5 3 3 5 3 f f f . . 
    . . . . f d 3 5 5 3 d f . . . . 
    . . . . f d 3 3 3 3 d f . . . . 
    . . . . . f 8 8 8 8 f . . . . . 
    . . . . . f 8 f f 8 f . . . . . 
    . . . . . . f . . f . . . . . . 
    `, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f 1 1 1 1 1 2 f . . . . 
    . . . f 1 2 2 2 2 2 1 2 f . . . 
    . . . f 2 2 f f f f 2 1 f . . . 
    . . . f 2 f f d d f f 2 f . . . 
    . . . . f d f d d f d f . . . . 
    . . . . f d 7 d d 7 d f . . . . 
    . . . . . f d d d d f . . . . . 
    . . . . . f f d d f f . . . . . 
    . . . . f 2 2 2 2 2 2 f . . . . 
    . . . . f d 2 2 2 2 d f . . . . 
    . . . . f d 2 2 2 2 d f . . . . 
    . . . . . f 4 4 4 4 f . . . . . 
    . . . . . f 4 f f 4 f . . . . . 
    . . . . . . f . . f . . . . . . 
    `, SpriteKind.payer))
tiles.setCurrentTilemap(tilemap`level1`)
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
info.player2.setLife(3)
info.player1.setLife(3)
