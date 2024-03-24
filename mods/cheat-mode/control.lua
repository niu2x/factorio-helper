local function handle( player )
	player.cheat_mode = settings.global["cheat-mode"].value

	if settings.global["give-me-robot"].value then
		player.insert{name = 'construction-robot', count=50}
		player.insert{name = 'power-armor-mk2', count=1}
		player.insert{name = 'personal-roboport-mk2-equipment', count=2}
		player.insert{name = 'battery-mk2-equipment', count=2}
		player.insert{name = 'fusion-reactor-equipment', count=2}
		player.insert{name = 'personal-laser-defense-equipment', count=5}

	end
end


script.on_init(function ( event )
	game.print("cheat-mode:on_init: " .. tostring(settings.global["cheat-mode"]))
	local player = game.get_player(1)
	if player then
		handle(player)
	end
end)

script.on_event(defines.events.on_runtime_mod_setting_changed, function ( event )
	game.print("cheat-mode:on_event: " .. tostring(settings.global["cheat-mode"].value))
	local player = game.get_player(1)
	if player then
		handle(player)
	end
end)

script.on_configuration_changed(function ( event )
	game.print("cheat-mode:on_configuration_changed: " .. tostring(settings.global["cheat-mode"].value))
	local player = game.get_player(1)
	if player then
		handle(player)
	end
end)