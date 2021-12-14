var assert = require('assert');
const fs = require('fs')
var HeightMap = require('./HeightMap.ts')

describe('HeightMap', function() {

	var heightMap: HeightMap;
	var lines: Array<string>

	beforeEach(function(done) {
		fs.readFile('test-input.txt', 'utf8', (err, data) => {
			if (err) {
				console.error(err)
				return
			}

			lines = data.split(/\r?\n/).map(line => line.trim());
			done()
		})
	
  });

	it('match row after 1 turn', function() {
		heightMap = new HeightMap(lines, 1);
		assert.deepEqual(heightMap.map[0], [6, 5, 9, 4, 2, 5, 4, 3, 3, 4])
	})

	it('match row after 2 turns', function() {
		heightMap = new HeightMap(lines, 2);
		assert.deepEqual(heightMap.map[0], [8, 8, 0, 7, 4, 7, 6, 5, 5, 5])
	})

	it('match row after 5 turns', function() {
		heightMap = new HeightMap(lines, 5);
		assert.deepEqual(heightMap.map[0], [4, 4, 8, 4, 1, 4, 4, 0, 0, 0])
	})

	it('notices all octopi flash after step 195', function(done) {
		heightMap = new HeightMap(lines, 195);
		assert.equal(heightMap.allOctopiFlash, true)
		done()
	})
	
	it('reads input and determines answer', function() {
		heightMap = new HeightMap(lines, 100);
		assert.equal(heightMap.answer, 1656)
	})
});