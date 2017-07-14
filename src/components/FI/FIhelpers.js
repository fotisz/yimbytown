mport { createReducer as CR } from "redux-create-reducer";
import { combineReducers } from "redux";
import { scaleLinear } from "d3-scale";
import { createSelector } from "reselect";
import map from "lodash/map";
import filter from "lodash/filter";
import uniqueId from "lodash/uniqueId";
import { KJ, VF, K0, Q0, W } from "constants";

export const TIME_UNIT = 200;
export const LANE_LENGTH = 200; //meters

function createCars(k: number): Array<{ id: string, x: number }> {
	let space = KM / k;
	return range(0, ROAD_WIDTH / KM * k).map(d => ({
		id: uniqueId(),
		x: d * space
	}));
}

function tickAction(){
	return (dispatch,getState)=>{
		let last = 0;
		let mover = timer(elapsed=>{
			let {cars,paused} = getState();
			if(state.paused){
				return mover.stop();
			}
			// cars = map(cars,d=>{
			// 	return
			// });
			let dt = elapsed - last;
			let numCarsA = cars.length;
			dispatch({type: 'tick', dt});
			// let {cars} = getState();
			let 
			dispatch({type: 'reducePoolSize'})
			// for (var i = 0; i < ; i++) {
			// 	Things[i]
			// }
			// let {cars} = 

			last = elapsed;
		});
	};

}

const trafficReduce = CR({
	cars: createCars(K0),
	poolSize: 0
}){
	tick:(traffic,{dt})=>{

	},//blah blah,
});

const poolSizeReduce = CR(5,{
	increment:size=>size+1,
	pop: poolSize => poolSize-1
});

export const reducer = (state,action)=>{
	switch(action.type){
		case 'tick':
			let n = 0;
			let cars = state.cars;
			let newCars = [];
			let v = 
			for (var i = 0; i < cars.length; i++) {
				let car = cars[i];
				let newX = car.x + action.dt*state.v;
				cars[i] = 
			}
			// let cars = state.cars
	}
}

createReducer({
	trafficReduce: trafficReduce,
});


