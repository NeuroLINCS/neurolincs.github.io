side = dim = 12.0
hemisphere = [[2, 4],[1, 8],[0, 10],[0, 11],[0, 12],[0, 13],[0, 14],[0, 14],[0, 15],[0, 15],[0, 16],[0, 16],[0, 17],[0, 17],[0, 18],[0, 18],[0, 18],[0, 19],[0, 19],[0, 20],[0, 20],[0, 20],[0, 20],[0, 21],[0, 21],[0, 21],[0, 21],[0, 21],[0, 21],[0, 22],[0, 22],[0, 21],[0, 21],[0, 21],[0, 21],[0, 21],[0, 21],[0, 20],[0, 20],[0, 20],[0, 19],[0, 18],[0, 18],[0, 17],[0, 16],[0, 15],[1, 12],[2, 8]]

neutral = '#20bef0'
negative = '#1f86c5'
pink1 = '#f8ccdf'
pink2 = '#bc8dbe'
pink3 = '#8782bb'
yellow1 = '#fef15a'
green1 = '#b3d043'
green2 = '#80cab7'

$(document).ready ->

	paper = Snap(1000, 1000)

	[left, right] = build_brain(paper)

	animate(flatten(left))
	animate(flatten(right))


build_brain = (paper) ->

	x = 500
	y = 20

	right_hem = []
	left_hem = []

	for [offset, num_squares] in hemisphere

		right = []
		left = []

		y = y + dim * 3/2

		# right
		x = 500 + offset * dim * 3/2
		for square in [0..num_squares]

			x = x + dim * 3/2

			right.push paper.rect(x, y, side, side).attr({fill: neutral})

		right_hem.push right

		# left
		x = 500 - offset * dim * 3/2
		for square in [0..num_squares]

			x = x - dim * 3/2

			left.push paper.rect(x, y, side, side).attr({fill: neutral})

		left_hem.push left


	connect_hem(left_hem)
	connect_hem(right_hem)


	return [left_hem, right_hem]


connect_hem = (hem) ->

	for row, y in hem

		offset = hemisphere[y][0]
		num_squares = hemisphere[y][1]

		for square, x in row

			square.neighbors = []

			if y > 0
				# connect up
				square.neighbors.push hem[y-1][x]

				if x > 0
					# connect left
					square.neighbors.push hem[y-1][x-1]

				if x < num_squares - 1
					# connect right
					square.neighbors.push hem[y-1][x+1]

			if y < hemisphere.length - 1
				# connect down
				square.neighbors.push hem[y+1][x]

				if x > 0
					# connect left
					square.neighbors.push hem[y+1][x-1]

				if x < num_squares - 1
					# connect right
					square.neighbors.push hem[y+1][x+1]

			if x > 0
				# connect left
				square.neighbors.push hem[y][x-1]

			if x < num_squares - 1
				# connect right
				square.neighbors.push hem[y][x+1]




animate = (squares) ->

	# _.map(_.shuffle(squares), _.rateLimit(foreground, 1000, true, => animate(squares)))
	_.map(_.shuffle(squares), _.rateLimit(background, 500, true, => false))


flicker = (t, color, cb) ->

	t.animate({fill: color}, 3000, mina.bounce, => t.animate({fill: neutral}, 3000, mina.bounce, => cb()))


background = (square) ->

	if Math.random() < 0.6 then flicker(square, negative, () => background(n) for n in square.neighbors)


# foreground = (square) ->

# 	pink_flicker = _.partial(flicker2, _, pink1, pink2, pink3, 0.3);
# 	green_flicker = _.partial(flicker2, _, yellow1, green1, green2, 0.3);

# 	if r < 0.3 then flicker(square, yellow1, () => foreground(n, yellow1) for n in square.neighbors)
# 	else if r < 0.6  then flicker(square, pink1, () => foreground(n, pink1) for n in square.neighbors)
# 	else return null

# flicker2 = (square) ->


# 	flicker(t, color2, color3, color3, cutoff) if Math.random() < cutoff

# 	r = Math.random()





flatten = (array2d) ->

	return array2d.reduce((a, b) -> a.concat(b))
