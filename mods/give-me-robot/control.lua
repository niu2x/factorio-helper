script.on_init(function ( event )
	game.print("give-me-robot:on_init:")
	local player = game.get_player(1)
	if player then
		player.insert{name = 'construction-robot', count=50}
		player.insert{name = 'power-armor-mk2', count=1}
		player.insert{name = 'personal-roboport-mk2-equipment', count=2}
		player.insert{name = 'battery-mk2-equipment', count=2}
		player.insert{name = 'fusion-reactor-equipment', count=2}
	end
end)

script.on_event(defines.events.on_player_created, function ( event )
	local player = game.get_player(1)
	game.print("give-me-robot:on_event: " .. tostring(player))
	if player then
		player.insert{name = 'construction-robot', count=50}
		player.insert{name = 'power-armor-mk2', count=1}
		player.insert{name = 'personal-roboport-mk2-equipment', count=2}
		player.insert{name = 'battery-mk2-equipment', count=2}
		player.insert{name = 'fusion-reactor-equipment', count=2}
	end
end)

