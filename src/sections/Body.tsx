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
          <video width={420}  controls>
            <source src="/videos/solid-in-100-seconds.mp4" type="video/mp4" />
            Video could not load properly.
          </video>
        </div>
      </section>
      <section>
        <h2>Hard Truth</h2>
        <a>👇</a>
      </section>
      <section>
        <p>You <span>Can't</span> learn to code by watching videos</p>
        <a>i'm sad 😢</a>
      </section>
      <section>
        <h2>Solution</h2>
        <p>Fireship is all about <span>Project-based</span> learning.
        I create short highly-focused videos that make learning to code addicting. </p>
        <a>but like how? 🤔</a>
      </section>
      <section>
        <h2>Have Fun</h2>
        <p>
          I built this one-of-a-kind learning platform to give
          you <span>Dopamine</span> hits like XP and meme prizes
          for every little accomplishment
        </p>
        <button>login now to start earning useless XP points 💎</button>
      </section>
      <section>
        <h2>Let's Go</h2>
        <p>
          There's tons of free content, here, so <span>Play</span> around before you upgrade
        </p>
        <a>every course starts out free</a>
      </section>
    </main>
  )
}

export default Body;