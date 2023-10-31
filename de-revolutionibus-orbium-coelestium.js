const asteroidBeltOrbitRem = getComputedStyle(document.querySelector(":root")).getPropertyValue("--asteroid-belt-orbit");
const kuiperBeltOrbitRem = getComputedStyle(document.querySelector(":root")).getPropertyValue("--kuiper-belt-orbit");
const remSize = getComputedStyle(document.documentElement).fontSize;
const asteroidBeltOrbitPx = parseFloat(asteroidBeltOrbitRem) * parseFloat(remSize);
const kuiperBeltOrbitPx = parseFloat(kuiperBeltOrbitRem) * parseFloat(remSize);

const tinyRocks = document.getElementsByClassName("tiny-rocks")[0];
const smallRocks = document.getElementsByClassName("small-rocks")[0];
const mediumRocks = document.getElementsByClassName("medium-rocks")[0];
const smallKupierRocks = document.getElementsByClassName("small-kuiper-rocks")[0];
const mediumKuiperRocks = document.getElementsByClassName("medium-kuiper-rocks")[0];
const bigRocks = document.getElementsByClassName("big-rocks")[0];

const x_center = asteroidBeltOrbitPx / 2;
const y_center = asteroidBeltOrbitPx / 2;

const xk_center = kuiperBeltOrbitPx / 2;
const yk_center = kuiperBeltOrbitPx / 2;

const spread = asteroidBeltOrbitPx * 0.08;

seed_rocks(bigRocks, "big-rock", 25, 50, asteroidBeltOrbitPx, 0.5, x_center, y_center);
seed_rocks(mediumRocks, "medium-rock", 50, 25, asteroidBeltOrbitPx, 0.5, x_center, y_center);
seed_rocks(smallRocks, "small-rock", 50, 50, asteroidBeltOrbitPx, 0.5, x_center, y_center);
seed_rocks(tinyRocks, "tiny-rock", 500, 600, asteroidBeltOrbitPx, 0.2, x_center, y_center);

seed_rocks(mediumKuiperRocks, "medium-rock", 100, 25, kuiperBeltOrbitPx, 0.5, xk_center, yk_center);
seed_rocks(smallKupierRocks, "small-rock", 500, 50, kuiperBeltOrbitPx, 0.4, xk_center, yk_center);

function seed_rocks(targetElement, rockSize, quantity, spread, diameter, spreadRatio, x_c, y_c) {
  for (var i = 1; i <= quantity; ++i) {
    var angle = Math.random() * Math.PI * 2;
    var radius = diameter / 2 + Math.random() * spread - spread * spreadRatio;

    x = Math.cos(angle) * radius + x_c;
    y = Math.sin(angle) * radius + y_c;

    var rock = document.createElement("div");
    rock.classList.add("rock");
    rock.classList.add(rockSize);
    targetElement.appendChild(rock);
    rock.style.left = parseInt(x) + "px";
    rock.style.top = parseInt(y) + "px";
  }
}
