import { world, system } from "@minecraft/server";

world.afterEvents.playerSpawn.subscribe((event) => {
    if (!event.initialSpawn) return;
    event.player.sendMessage("§a [Mobs] Addon carregado!");
});