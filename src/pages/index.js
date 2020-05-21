import React from "react"
import Layout from "../components/Layout"
import Paragraph from '../components/PostBlocks/blocks/Paragraph'

export default ({ data, location }) => {
  return (
    <Layout location={location}>
      <article className="post">
        <Paragraph content={`My name is Calvin. I build web software at <a href="https://10up.com">10up</a> while raising 3 boys with my wife.`} />
        <Paragraph content={`I could say more, but maybe I'll leave that for later. There was a time when all I wanted was traffic, recognition, and to "make my splash" in the online world.`} />
        <Paragraph content={`But that was then, and this is now. I don't have analytics installed on this site, I don't run a newsletter (I can hear the marketers screaming now), and I don't have a regular publishing schedule.`} />
        <Paragraph content={`If you're looking for a personal brand to jump on board with — an "intentional brand", is what I mean —&nbsp;<strong>you won't find it here</strong>.`} />
        <Paragraph content={`But, if you want to occasionally <a href="https://calvinkoepke.com/now/">see what I'm up to</a>, <a href="https://calvinkoepke.com/posts">learn what I learn</a>, <a href="https://calvinkoepke.com/about/">or just see what I'm about</a>, then I've got you covered. And if you want to get notified, there's good-old-fashioned <a href="https://calvinkoepke.com/feed/">RSS</a>.`} />
      </article>
    </Layout>
  )
}
