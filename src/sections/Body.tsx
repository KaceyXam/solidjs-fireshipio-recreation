import { Component } from "solid-js";

import styles from "./Body.module.css";

const Body: Component = () => {
  return (
    <main class={styles.main}>
      <section class={styles.heroSection}>
        <div class={styles.title}>
          <h1>Learn to Code <span class={styles.faster}>Faster.</span></h1>
          <p>Fireship is a {" "}
            <span>blazingly fast</span> && <span>highly-amusing </span>
            way to level up your programming skills</p>
          <a href="#">Start Here</a>
        </div>
        <div class={styles.videoDiv}>
          <iframe src={"https://player.vimeo.com/video/599890291"}
            allowfullscreen
          />  
        </div>
      </section>
      <section class={styles.hardTruth}>
        <h2>Hard Truth</h2>
        <a href="#truth">👇</a>
      </section>
      <section id="truth" class={`${styles.bodySection}`}>
        <p class={styles.cantLearn}>You <span class={styles.boldText}>Can't</span> learn to code by watching videos</p>
        <a href="#solution">i'm sad 😢</a>
      </section>
      <section id="solution" class={styles.bodySection} style={{"--bold-color": "rgb(34 197 94)"}}>
        <h2>Solution</h2>
        <p>Fireship is all about <span class={styles.boldText}>Project-based</span> learning.
          I create short highly-focused videos that make learning to code addicting. </p>
        <a href="#fun">but like how? 🤔</a>
      </section>
      <section id="fun" class={styles.bodySection} style={{"--bold-color": "rgb(168 85 247)"}}>
        <h2>Have Fun</h2>
        <p>
          I built this one-of-a-kind learning platform to give
          you <span class={styles.boldText}>Dopamine</span> hits like XP and meme prizes
          for every little accomplishment
        </p>
        <button class={styles.loginBtn}>login now to start earning useless XP points 💎</button>
      </section>
      <section id="go" class={styles.bodySection} style={{"--bold-color": "rgb(234 179 8)"}}>
        <h2>Let's Go</h2>
        <p>
          There's tons of free content, here, so <span class={styles.boldText}>Play</span> around before you upgrade
        </p>
        <a href="/">every course starts out free</a>
      </section>
    </main>
  )
}

export default Body;