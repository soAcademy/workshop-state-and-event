import React, { Component } from 'react';
import { longdo, map, LongdoMap } from './longdo-map/LongdoMap';

class App extends Component {

  initMap(){
    map.Layers.setBase(longdo.Layers.POLITICAL);
    map.zoomRange({ min:6, max:15 });
    // map.location(longdo.LocationMode.Geolocation,true);
    map.bound({
      minLon: 100, minLat: 6,
      maxLon: 105, maxLat: 18
    });
    map.Ui.DPad.visible(false);
    map.Ui.Zoombar.visible(false);
    map.Ui.Geolocation.visible(false)
    map.Ui.Toolbar.visible(false);
    map.Ui.LayerSelector.visible(false);
    map.Ui.Fullscreen.visible(false);
    map.Ui.Crosshair.visible(false);
    map.Ui.Scale.visible(false);
    var marker1 = new longdo.Marker({ lon: 98.890434, lat: 8.916207 },
      {
        title: 'Custom Marker',
        icon: {
          url: '../../public/18-189422_red-dot-png-circle.png',
        },
        popup: {
          html: '<div style="background: #eeeeff;">popup</div>'
        }
      });
      map.Overlays.add(marker1);

  }

  // make sure to use different map key: https://map.longdo.com/api
  render() {
    const mapKey = '246731d23dc4718bff4317880649e085'
    return (
      <div className="App h-screen">
        <LongdoMap id="longdo-map" mapKey={mapKey} callback={this.initMap} />
      </div>
    );
  }
}

export default App;