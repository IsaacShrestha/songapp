import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

var Band = EmberObject.extend({
	name:'',
});

export default Route.extend({
	model: function(){
		var ledZeppelin = Band.create({
			name: 'Led Zeppelin',
		});

		var pearlJam = Band.create({
			name: 'Pearl Jam',
		});

		var fooFighter = Band.create({
			name: 'Foo Fighters',
		});

		return [ledZeppelin, pearlJam, fooFighter];
	}
});
