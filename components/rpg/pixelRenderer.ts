import { TILE_SIZE } from "./worldData";

export function drawTile(
  ctx: CanvasRenderingContext2D,
  tileType: number,
  x: number,
  y: number,
  tick: number
) {
  const px = x * TILE_SIZE;
  const py = y * TILE_SIZE;

  switch (tileType) {
    case 0: // Grass
      ctx.fillStyle = "#68B86B";
      ctx.fillRect(px, py, TILE_SIZE, TILE_SIZE);
      // Grass speckles
      ctx.fillStyle = "#59A25C";
      ctx.fillRect(px + 4, py + 8, 2, 4);
      ctx.fillRect(px + 18, py + 22, 2, 4);
      ctx.fillStyle = "#7ED281";
      ctx.fillRect(px + 12, py + 14, 2, 3);
      ctx.fillRect(px + 26, py + 6, 2, 3);
      break;

    case 1: // Pine Tree / Forest Border
      // Grass background first
      ctx.fillStyle = "#59A25C";
      ctx.fillRect(px, py, TILE_SIZE, TILE_SIZE);
      // Trunk
      ctx.fillStyle = "#5A331E";
      ctx.fillRect(px + 12, py + 18, 8, 14);
      // Foliage base
      ctx.fillStyle = "#173F35";
      ctx.fillRect(px + 4, py + 8, 24, 14);
      // Foliage mid
      ctx.fillStyle = "#1E5245";
      ctx.fillRect(px + 6, py + 4, 20, 10);
      // Foliage top
      ctx.fillStyle = "#276858";
      ctx.fillRect(px + 10, py + 1, 12, 6);
      // Highlight leaf
      ctx.fillStyle = "#34826F";
      ctx.fillRect(px + 8, py + 6, 4, 4);
      ctx.fillRect(px + 14, py + 3, 4, 3);
      break;

    case 2: // Cobble / Dirt Path
      ctx.fillStyle = "#F7F1D5";
      ctx.fillRect(px, py, TILE_SIZE, TILE_SIZE);
      // Cobble texture
      ctx.fillStyle = "#E5DAB5";
      ctx.fillRect(px + 2, py + 4, 8, 5);
      ctx.fillRect(px + 16, py + 10, 10, 6);
      ctx.fillRect(px + 6, py + 20, 12, 6);
      ctx.fillStyle = "#D6C89D";
      ctx.fillRect(px + 12, py + 5, 2, 2);
      ctx.fillRect(px + 24, py + 22, 3, 2);
      break;

    case 3: // Water
      ctx.fillStyle = "#5DA9C7";
      ctx.fillRect(px, py, TILE_SIZE, TILE_SIZE);
      // Subtle wave shimmer based on tick
      const waveShift = Math.floor(tick / 20) % 4;
      ctx.fillStyle = "#8CD2EE";
      ctx.fillRect(px + 4 + waveShift * 2, py + 8, 8, 2);
      ctx.fillRect(px + 14 - waveShift * 2, py + 20, 10, 2);
      ctx.fillStyle = "#3D829E";
      ctx.fillRect(px + 6, py + 11, 4, 1);
      ctx.fillRect(px + 18, py + 23, 6, 1);
      break;

    case 4: // Building Wall
      ctx.fillStyle = "#F2E8D0";
      ctx.fillRect(px, py, TILE_SIZE, TILE_SIZE);
      // Timber framework
      ctx.fillStyle = "#784B2E";
      ctx.fillRect(px, py + 28, TILE_SIZE, 4); // base trim
      ctx.fillRect(px, py, 3, TILE_SIZE); // left post
      ctx.fillRect(px + 29, py, 3, TILE_SIZE); // right post
      // Window
      ctx.fillStyle = "#45738E";
      ctx.fillRect(px + 8, py + 8, 16, 12);
      ctx.fillStyle = "#95D1F2";
      ctx.fillRect(px + 10, py + 10, 5, 4);
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(px + 15, py + 8, 2, 12); // window mullion
      ctx.fillRect(px + 8, py + 14, 16, 2);
      break;

    case 5: // Building Roof
      ctx.fillStyle = "#9C4A2F";
      ctx.fillRect(px, py, TILE_SIZE, TILE_SIZE);
      // Roof tile stripes
      ctx.fillStyle = "#BF5E3D";
      ctx.fillRect(px, py + 4, TILE_SIZE, 4);
      ctx.fillRect(px, py + 14, TILE_SIZE, 4);
      ctx.fillRect(px, py + 24, TILE_SIZE, 4);
      ctx.fillStyle = "#73331E";
      ctx.fillRect(px, py + 10, TILE_SIZE, 2);
      ctx.fillRect(px, py + 20, TILE_SIZE, 2);
      break;

    case 6: // Building Door
      ctx.fillStyle = "#F2E8D0";
      ctx.fillRect(px, py, TILE_SIZE, TILE_SIZE);
      // Door frame
      ctx.fillStyle = "#402213";
      ctx.fillRect(px + 6, py + 4, 20, 28);
      // Door panel
      ctx.fillStyle = "#6B3B22";
      ctx.fillRect(px + 8, py + 6, 16, 26);
      // Doorknob
      ctx.fillStyle = "#F2C94C";
      ctx.fillRect(px + 20, py + 18, 3, 3);
      // Mat
      ctx.fillStyle = "#334138";
      ctx.fillRect(px + 4, py + 29, 24, 3);
      break;

    case 7: // Flower patch
      ctx.fillStyle = "#68B86B";
      ctx.fillRect(px, py, TILE_SIZE, TILE_SIZE);
      // Red and Gold flowers
      ctx.fillStyle = "#E64A4A";
      ctx.fillRect(px + 6, py + 6, 4, 4);
      ctx.fillRect(px + 20, py + 18, 4, 4);
      ctx.fillStyle = "#F2C94C";
      ctx.fillRect(px + 18, py + 8, 4, 4);
      ctx.fillRect(px + 8, py + 20, 4, 4);
      // Center stems
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(px + 7, py + 7, 2, 2);
      ctx.fillRect(px + 21, py + 19, 2, 2);
      ctx.fillRect(px + 19, py + 9, 2, 2);
      ctx.fillRect(px + 9, py + 21, 2, 2);
      break;

    case 8: // Fence
      ctx.fillStyle = "#68B86B";
      ctx.fillRect(px, py, TILE_SIZE, TILE_SIZE);
      // Wooden rails
      ctx.fillStyle = "#7A4C2E";
      ctx.fillRect(px + 2, py + 10, 28, 4);
      ctx.fillRect(px + 2, py + 18, 28, 4);
      // Posts
      ctx.fillStyle = "#59341C";
      ctx.fillRect(px + 4, py + 6, 6, 20);
      ctx.fillRect(px + 22, py + 6, 6, 20);
      break;

    case 9: // Signpost / Board
      ctx.fillStyle = "#68B86B";
      ctx.fillRect(px, py, TILE_SIZE, TILE_SIZE);
      // Sign post
      ctx.fillStyle = "#5A331E";
      ctx.fillRect(px + 13, py + 16, 6, 14);
      // Board
      ctx.fillStyle = "#9C6236";
      ctx.fillRect(px + 4, py + 6, 24, 14);
      ctx.fillStyle = "#F7F1D5";
      ctx.fillRect(px + 6, py + 8, 20, 10);
      // Text lines
      ctx.fillStyle = "#4A2E19";
      ctx.fillRect(px + 8, py + 10, 16, 2);
      ctx.fillRect(px + 8, py + 14, 12, 2);
      break;

    default:
      ctx.fillStyle = "#68B86B";
      ctx.fillRect(px, py, TILE_SIZE, TILE_SIZE);
  }
}

export function drawPlayer(
  ctx: CanvasRenderingContext2D,
  px: number,
  py: number,
  facing: "down" | "up" | "left" | "right",
  frame: number
) {
  // Shadow beneath player
  ctx.fillStyle = "rgba(23, 63, 53, 0.4)";
  ctx.beginPath();
  ctx.ellipse(px + 16, py + 28, 9, 4, 0, 0, Math.PI * 2);
  ctx.fill();

  // Step bobbing
  const bob = frame === 1 ? -1 : 0;
  const drawY = py + bob;

  // 1. Cap / Hair
  ctx.fillStyle = "#1D4D41";
  ctx.fillRect(px + 9, drawY + 2, 14, 8); // main hair/cap
  ctx.fillStyle = "#B8FF3B";
  ctx.fillRect(px + 10, drawY + 3, 12, 3); // cap front visor/badge

  // 2. Face / Head
  ctx.fillStyle = "#FAD0A5";
  ctx.fillRect(px + 10, drawY + 8, 12, 9); // face

  // Eyes based on facing
  ctx.fillStyle = "#1E252B";
  if (facing === "down") {
    ctx.fillRect(px + 12, drawY + 11, 2, 3);
    ctx.fillRect(px + 18, drawY + 11, 2, 3);
  } else if (facing === "up") {
    // Back of head, no eyes, more hair
    ctx.fillStyle = "#1D4D41";
    ctx.fillRect(px + 10, drawY + 6, 12, 10);
  } else if (facing === "left") {
    ctx.fillRect(px + 11, drawY + 11, 2, 3);
  } else if (facing === "right") {
    ctx.fillRect(px + 19, drawY + 11, 2, 3);
  }

  // 3. Torso / Jacket (GBA Trainer Style)
  ctx.fillStyle = "#2D6285";
  ctx.fillRect(px + 9, drawY + 16, 14, 9);
  ctx.fillStyle = "#F7F1D5";
  ctx.fillRect(px + 14, drawY + 16, 4, 9); // center zipper/collar

  // Backpack straps
  ctx.fillStyle = "#9C5236";
  if (facing === "down") {
    ctx.fillRect(px + 10, drawY + 17, 2, 7);
    ctx.fillRect(px + 20, drawY + 17, 2, 7);
  } else if (facing === "up") {
    // Large backpack on back
    ctx.fillStyle = "#B85536";
    ctx.fillRect(px + 10, drawY + 16, 12, 9);
    ctx.fillStyle = "#F2C94C";
    ctx.fillRect(px + 14, drawY + 19, 4, 3);
  }

  // 4. Legs & Shoes
  ctx.fillStyle = "#1C242C"; // trousers
  ctx.fillRect(px + 10, drawY + 24, 12, 4);

  // Shoes with animated step offset
  ctx.fillStyle = "#C44129";
  if (facing === "down" || facing === "up") {
    if (frame === 1) {
      // Step left foot
      ctx.fillRect(px + 9, drawY + 27, 5, 4);
      ctx.fillRect(px + 18, drawY + 28, 5, 3);
    } else if (frame === 2) {
      // Step right foot
      ctx.fillRect(px + 9, drawY + 28, 5, 3);
      ctx.fillRect(px + 18, drawY + 27, 5, 4);
    } else {
      // Standing idle
      ctx.fillRect(px + 10, drawY + 28, 4, 3);
      ctx.fillRect(px + 18, drawY + 28, 4, 3);
    }
  } else {
    // Walking sideways
    ctx.fillRect(px + 11, drawY + 28, 10, 3);
  }
}

export function drawNPC(
  ctx: CanvasRenderingContext2D,
  px: number,
  py: number,
  sprite: string,
  facing: string
) {
  // Shadow
  ctx.fillStyle = "rgba(23, 63, 53, 0.4)";
  ctx.beginPath();
  ctx.ellipse(px + 16, py + 28, 9, 4, 0, 0, Math.PI * 2);
  ctx.fill();

  if (sprite === "pokeball") {
    // Special hidden item
    ctx.fillStyle = "#E63946";
    ctx.beginPath();
    ctx.arc(px + 16, py + 20, 8, Math.PI, 0, false);
    ctx.fill();
    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.arc(px + 16, py + 20, 8, 0, Math.PI, false);
    ctx.fill();
    ctx.fillStyle = "#1D242B";
    ctx.fillRect(px + 8, py + 19, 16, 2);
    ctx.fillStyle = "#F2C94C";
    ctx.beginPath();
    ctx.arc(px + 16, py + 20, 3, 0, Math.PI * 2);
    ctx.fill();
    return;
  }

  if (sprite === "sign" || sprite === "totem") {
    // Already rendered on tile layer or static
    return;
  }

  // Base Humanoid NPC
  // 1. Hair
  if (sprite === "guide") {
    ctx.fillStyle = "#7A4C2E"; // brown hair
  } else if (sprite === "researcher") {
    ctx.fillStyle = "#8D99AE"; // gray hair / glasses
  } else if (sprite === "master") {
    ctx.fillStyle = "#2B2D42"; // dark hair with yellow headband
  } else {
    ctx.fillStyle = "#3D5A80";
  }
  ctx.fillRect(px + 9, py + 2, 14, 8);

  if (sprite === "master") {
    ctx.fillStyle = "#F2C94C"; // martial headband
    ctx.fillRect(px + 8, py + 5, 16, 3);
  }

  // 2. Face
  ctx.fillStyle = "#FAD0A5";
  ctx.fillRect(px + 10, py + 8, 12, 8);

  ctx.fillStyle = "#1D242B";
  if (facing === "down") {
    ctx.fillRect(px + 12, py + 11, 2, 2);
    ctx.fillRect(px + 18, py + 11, 2, 2);
  } else if (facing === "left") {
    ctx.fillRect(px + 11, py + 11, 2, 2);
  } else if (facing === "right") {
    ctx.fillRect(px + 19, py + 11, 2, 2);
  }

  // 3. Outfit
  if (sprite === "researcher") {
    ctx.fillStyle = "#FFFFFF"; // Lab coat
    ctx.fillRect(px + 9, py + 16, 14, 10);
    ctx.fillStyle = "#2B7A78"; // tie
    ctx.fillRect(px + 15, py + 16, 2, 6);
  } else if (sprite === "guide") {
    ctx.fillStyle = "#3A86C8"; // Blue shirt
    ctx.fillRect(px + 9, py + 16, 14, 10);
    ctx.fillStyle = "#F2C94C";
    ctx.fillRect(px + 14, py + 16, 4, 3);
  } else if (sprite === "master") {
    ctx.fillStyle = "#D90429"; // Crimson gi
    ctx.fillRect(px + 9, py + 16, 14, 10);
    ctx.fillStyle = "#1D242B"; // black belt
    ctx.fillRect(px + 9, py + 22, 14, 3);
  } else {
    ctx.fillStyle = "#3E8914"; // Courier green
    ctx.fillRect(px + 9, py + 16, 14, 10);
    ctx.fillStyle = "#8D5B4C"; // Messenger satchel strap
    ctx.fillRect(px + 10, py + 17, 12, 2);
  }

  // 4. Trousers & Shoes
  ctx.fillStyle = "#1E252B";
  ctx.fillRect(px + 10, py + 25, 12, 3);
  ctx.fillStyle = "#5A331E";
  ctx.fillRect(px + 10, py + 28, 4, 3);
  ctx.fillRect(px + 18, py + 28, 4, 3);

  // Interaction question bubble / mark above NPC
  ctx.fillStyle = "#F2C94C";
  ctx.fillRect(px + 13, py - 6, 6, 6);
  ctx.fillStyle = "#1D242B";
  ctx.fillRect(px + 15, py - 5, 2, 3);
  ctx.fillRect(px + 15, py - 1, 2, 1);
}
