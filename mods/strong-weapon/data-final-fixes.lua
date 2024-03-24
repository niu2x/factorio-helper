for name, v in pairs(data.raw['technology']) do
	local unit = v.unit
	if unit then
		unit.count = 1
		unit.count_formula = nil
	end
end