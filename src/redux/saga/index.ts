import { /*all*/ takeLeading } from "redux-saga/effects"
import { getCityWeather, getLocalWeather } from "redux/actions";
import { workerCityWeather } from "./cityWeather";
import { workerLocalWeather } from "./localWeather";
// import { watcherCityWeather } from "./cityWeather";
// import { watcherLocalWeather } from "./localWeather";

export default function* rootWatcher() {
    yield takeLeading(getLocalWeather, workerLocalWeather);
    yield takeLeading(getCityWeather, workerCityWeather);
    // yield all(
    //     [
    //         watcherLocalWeather(),
    //         watcherCityWeather()
    //     ]
    // )
}