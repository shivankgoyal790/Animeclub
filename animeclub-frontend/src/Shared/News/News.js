import React from "react"
import Newslist from "./Newslist"

const News = () =>{

    const dummynews = [
        {
            id : "n1",
            headline : "FEATURE: The Heart And Nostalgia Of Dragon Ball Super",
            description : "Dragon Ball Super was a roller-coaster ride since the beginning. The return of Great Saiyaman, battle-ready magical girls, the fates of universes at stake ... and that's just a few things that happened! Hit the jump for more.",
            likescount : "30"
        },
        {
            id : "n2",
            headline : "One Piece Manga Ad Featuring Oda Says ‘The Story Is in Its Final Stage’",
            description : "Japan woke up this morning to a bunch of One Piece-related materials, including its 100th volume manga being released and accompanying it, an advertisement featuring creator Eiichiro Oda and the phrase the story is in its final stage. All this and the full music video for the WE ARE ONE shorts from RADWIMPS is after the jump!",
            likescount : "24"
        }, 
        {
            id : "n3",
            headline : "Netflix Teases Live-Action One Piece with Photo of Episode 1 Script [UPDATED]",
            description : "The official Netflix Geeked Twitter account gave a tiny bit of fuel to the need for info when sharing a very small update for the live-action One Piece series, popping the first episode script on a table and shouting to the heavens, `IT'S HAPPENING!!!!!!` Read on for more.",
            likescount : "35"
        }
           
    ]
    return(
        <>
        <Newslist items = {dummynews}/>
        </>
    )
}

export default News