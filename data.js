var APP_DATA = {
  "scenes": [
    {
      "id": "0-exterior",
      "name": "EXTERIOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.02493327502849496,
          "pitch": 0.13454092918479965,
          "rotation": 0,
          "target": "1-general"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-general",
      "name": "GENERAL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.15292200549894197,
          "pitch": 0.10055308909873517,
          "rotation": 0,
          "target": "2-kitchen"
        },
        {
          "yaw": 3.137090477844483,
          "pitch": 0.13959998658585882,
          "rotation": 0,
          "target": "0-exterior"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen",
      "name": "KITCHEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.14897337584507042,
          "pitch": 0.13594019040329997,
          "rotation": 0,
          "target": "3-master-bedroom"
        },
        {
          "yaw": 2.9359791096117274,
          "pitch": 0.28253793325731635,
          "rotation": 0,
          "target": "1-general"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-master-bedroom",
      "name": "MASTER BEDROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.015109949804139,
          "pitch": 0.11882181560384453,
          "rotation": 0,
          "target": "2-kitchen"
        },
        {
          "yaw": 0.9493848317415914,
          "pitch": 0.13809260068089202,
          "rotation": 0,
          "target": "4-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bathroom",
      "name": "BATHROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5030229613231079,
          "pitch": 0.16604510575083964,
          "rotation": 0,
          "target": "3-master-bedroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
