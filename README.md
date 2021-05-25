# PC Part Info

Display basic information about your PC's hardware.

## Installation

Clone the repository

```
git clone https://github.com/travishorn/pc-part-info.git
```

Change into the directory

```
cd pc-part-info
```

Install dependencies

```
npm install
```

## Usage

Run the command

```
npm start
```

Basic information about your PC's hardware is displayed.

Example:

```
{
  cpu: {
    manufacturer: 'Intel®',
    model: 'Core™ i7-7700K',
    clockSpeed: 4.2,
    cores: 4
  },
  motherboard: {
    manufacturer: 'ASUSTeK COMPUTER INC.',
    model: 'STRIX Z270E GAMING'
  },
  memory: [
    {
      manufacturer: 'CRUCIAL',
      model: 'BLE8G4D30AEEA.K16FE',
      size: '8 GiB'
    },
    {
      manufacturer: 'CRUCIAL',
      model: 'BLE8G4D30AEEA.K16FE',
      size: '8 GiB'
    }
  ],
  graphics: [
    {
      manufacturer: 'Intel Corporation',
      model: 'Intel(R) HD Graphics 630'
    }
  ],
  storage: [
    {
      manufacturer: 'Samsung',
      model: 'Samsung SSD 960 PRO 512GB',
      size: '512 GB'
    },
    {
      manufacturer: 'Samsung',
      model: 'Samsung SSD 850 PRO 512GB',
      size: '512 GB'
    }
  ]
}
```

## License

Copyright 2021 Travis Horn

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
