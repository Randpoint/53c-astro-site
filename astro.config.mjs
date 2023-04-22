import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import compress from "astro-compress";
import partytown from "@astrojs/partytown";
import sharp from 'sharp';


export default defineConfig({
  site: 'https://53c.co.za/',
  integrations: [tailwind(), image(), compress(), partytown(), sharp()]
});