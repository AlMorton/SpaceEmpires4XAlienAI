import { Tech } from "./Tech";

export class TechLevels {
    public shipSize = new Tech(1, 7);
    public attack = new Tech(0, 3);
    public defense = new Tech(0, 3);
    public tactics = new Tech(0, 3);
    public move = new Tech(1, 7);
    public shipyard = new Tech(1, 3);
    public ground = new Tech(1, 3);
    public fighters = new Tech(0, 3);
    public pointDefense = new Tech(0, 3);
    public terraforming = new Tech(0, 2);
    public cloaking = new Tech(0, 2);
    public scanners = new Tech(0, 2);
    public mines = new Tech(0, 1);
    public mineSweeper = new Tech(0, 3);
    public militaryAcademy = new Tech(0, 2);
    public boarding = new Tech(0, 2);
    public security = new Tech(0, 2);
    public exploration = new Tech(0, 2);
    public fastBc = new Tech(0, 1);

    constructor() {

    }
}
