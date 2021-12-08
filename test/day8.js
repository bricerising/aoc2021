const test = require('ava');
const part1 = require('../src/day8/part1');
const part2 = require('../src/day8/part2-better');

test('part1', t => {
    const data = [["be cfbegad cbdgef fgaecd cgeb fdcge agebfd fecdb fabcd edb",
        "fdgacbe cefdb cefbgd gcbe"],
        ["edbfga begcd cbg gc gcadebf fbgde acbgfd abcde gfcbed gfec",
            "fcgedb cgb dgebacf gc"],
        ["fgaebd cg bdaec gdafb agbcfd gdcbef bgcad gfac gcb cdgabef",
            "cg cg fdcagb cbg"],
        ["fbegcd cbd adcefb dageb afcb bc aefdc ecdab fgdeca fcdbega",
            "efabcd cedba gadfec cb"],
        ["aecbfdg fbg gf bafeg dbefa fcge gcbea fcaegb dgceab fcbdga",
            "gecf egdcabf bgf bfgea"],
        ["fgeab ca afcebg bdacfeg cfaedg gcfdb baec bfadeg bafgc acf",
            "gebdcfa ecba ca fadegcb"],
        ["dbcfg fgd bdegcaf fgec aegbdf ecdfab fbedc dacgb gdcebf gf",
            "cefg dcbef fcge gbcadfe"],
        ["bdfegc cbegaf gecbf dfcage bdacg ed bedf ced adcbefg gebcd",
            "ed bcgafe cdgba cbgef"],
        ["egadfb cdbfeg cegd fecab cgb gbdefca cg fgcdab egfdb bfceg",
            "gbdfcae bgc cg cgb"],
        ["gcafb gcf dcaebfg ecagb gf abcdeg gaef cafbge fdbac fegbdc",
            "fgae cfgab fg bagce"],];
    const solution = 26;
    t.is(part1.count_unique_nums(data), solution);
});

test('part2', t => {
    const data = [["be cfbegad cbdgef fgaecd cgeb fdcge agebfd fecdb fabcd edb",
        "fdgacbe cefdb cefbgd gcbe"]]/*,
        ["edbfga begcd cbg gc gcadebf fbgde acbgfd abcde gfcbed gfec",
            "fcgedb cgb dgebacf gc"],
        ["fgaebd cg bdaec gdafb agbcfd gdcbef bgcad gfac gcb cdgabef",
            "cg cg fdcagb cbg"],
        ["fbegcd cbd adcefb dageb afcb bc aefdc ecdab fgdeca fcdbega",
            "efabcd cedba gadfec cb"],
        ["aecbfdg fbg gf bafeg dbefa fcge gcbea fcaegb dgceab fcbdga",
            "gecf egdcabf bgf bfgea"],
        ["fgeab ca afcebg bdacfeg cfaedg gcfdb baec bfadeg bafgc acf",
            "gebdcfa ecba ca fadegcb"],
        ["dbcfg fgd bdegcaf fgec aegbdf ecdfab fbedc dacgb gdcebf gf",
            "cefg dcbef fcge gbcadfe"],
        ["bdfegc cbegaf gecbf dfcage bdacg ed bedf ced adcbefg gebcd",
            "ed bcgafe cdgba cbgef"],
        ["egadfb cdbfeg cegd fecab cgb gbdefca cg fgcdab egfdb bfceg",
            "gbdfcae bgc cg cgb"],
        ["gcafb gcf dcaebfg ecagb gf abcdeg gaef cafbge fdbac fegbdc",
            "fgae cfgab fg bagce"],]*/;
    const solution = 61229;
    t.is(part2.count_unique_nums(data), solution);
});

