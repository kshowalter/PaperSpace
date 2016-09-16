## Map
* Grid, spiral out
* Start w/Major
* Roll d6
  * 3-4: minor star
  * 6: major star system

Major star systems are advanced. They export:
  * technology (electronics, tools, processors)
  * luxuries (art, food, entertainment, "entertainment")

Minor stars are not as developed, and often consist of a space based mining operation, and a planet side organic harvesting colony (farming, fishing, etc.). Because of the seasonal nature of the organic harvesting, people will often work in mining during when not needed on the planet, leading to increased production from the mine in the organic off season.

| Season | Organic | Ore  |
|--------|---------|------|
| Spring | 1.25    | 0.75 |
| Summer | 1       | 1    |
| Fall   | 0.75    | 1.25 |
| Winter | 1       | 1    |

Major systems assigned names based on playing card values ( 2-10, J, K, Q). For each system, draw a card from one suit. Examples:

| Card drawn | Flavor text |
|--- | --- |
| 4 | Altair **4** |
| 3 | Sol **3** |
| Q | **Q**o'noS |
| K | **K**oozebane |
| J | **J**ool |

## Ship
Core values

| Ship part   | Description                                              | Minimum Value |
|-------------|----------------------------------------------------------|---------------|
| Structure   | The hull and passive defenses                            | 1             |
| Cargo space | The cargo slots available to carry cargo pods            | 1             |
| Weapons     | Used in attacking other ships                            | 0             |

Derived values

| Ship part | Description                                              | Minimum Value |
|-----------|----------------------------------------------------------|---------------|
| Ship size | Structure + Cargo size                                   | 2             |
| Crew      | The skill of the crew and their ability to work together | 0             |
| Cost      | (ship_size)^2 * 10 (k)                                   | 40k           |

Crew skill: Each ship has positions with minimum skill levels (captain, engineer, gunner, etc.). If they are met, the crew skill is 0. If someone is missing, or unskilled, there can be a negative. If someone is very skilled, there can be a bonus. Most of the time this should be 0.

Crew experience: This determines how well the crew works together. Completed jobs increase the crew's cohesiveness. Losing a crew member can bring the crew together, or drive them apart. Losing more than half the crew resets the crew's experience. Job history must be at least 2/3 successful to advance.

    ( crew_bonus )^2 * 2 = jobs_needed

| Crew bonus | Jobs completed |
|------------|----------------|
| 1          | 2              |
| 2          | 8              |
| 3          | 18             |
| 4          | 32             |
| 5          | 50             |
| 6          | 72             |
| 7          | 98             |

Crew value = (+/-) crew skill + crew experience

## Jobs

Each job comes from a randomly drawn pair of cards (one red, one black). One card is the destination (see map section), one card is determines the difficulty.

| Card | Difficulty |
|------|------------|
| 2    | 1          |
| 3    | 1          |
| 4    | 2          |
| 5    | 2          |
| 6    | 3          |
| 7    | 3          |
| 8    | 4          |
| 9    | 4          |
| 10   | 5          |
| J    | 5          |
| K    | 5          |
| Q    | 5          |
| A    | 6          |

Job payment is: difficulty * distance * 1k. Jobs in the same system are treated as if they have a distance of 1 (???).

## Travel

Travel cost is per space fold. Ships have different fold lengths, so some ships can travel faster using less resources (though may take more to maintain in general)

The map grid is a 2 dimensional representation of 3 dimensional space, therefor one unit of distance covers all adjacent star systems.

## Encounter

When traveling with a job, there is a chance that you will encounter a ship with interest in what you are doing. In the controlled systems, it is most likely a check for illegal cargo and fugitives. In the chaotic systems, it will be mostly be pirates.

After traveling (fold or in system move), there is a chance that someone is wating for you. Roll a 1d6, beat the job difficulty and you do not have an encounter. With a job difficulty of 1, you will not have an encounter 5/6th of the time. With a difficulty of 6, you will always have en encounter.

When starting an encounter as the traveler, you are surprised and must fight or run.

* To escape
  * 3d6 + crew > 
