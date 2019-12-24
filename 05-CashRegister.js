function checkCashRegister(price, cash, cid) {
    var change = (cash - price);
    var totalCid = cid.map(x => x[1]).reduce((a, b) => a + b);
    var coinsWorth = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100,
    }

    if (totalCid < change) {
        return { status: "INSUFFICIENT_FUNDS", change: [] }
    }

    else if (totalCid === change) {
        return { status: "CLOSED", change: cid };
    }

    else {
        cid.reverse();
        let changeDue = [];
        for (let i = 0; i < cid.length; i++) {
            let current = cid[i][0];
            let val = cid[i][1];
            if (coinsWorth[current] < change) {
                if (val < Math.floor(change / coinsWorth[current]) * coinsWorth[current]) {
                    changeDue.push([current, val]);
                } else {
                    changeDue.push([current, Math.floor(change / coinsWorth[current]) * coinsWorth[current]]);
                }
                change -= changeDue[changeDue.length - 1][1];
            }
        }
        if (change > 0 && change < 0.01) {
            changeDue[changeDue.length - 1][1] += 0.01;
            return { status: "OPEN", change: changeDue }
        } else if (change === 0) {
            return { status: "OPEN", change: changeDue }
        } else {
            return { status: "INSUFFICIENT_FUNDS", change: [] }
        }

    }

}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));