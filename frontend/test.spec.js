/**
 * Created by DNS on 07.11.2017.
 */
function getValue() {
    return 10
}

describe("getValue", function() {

    it("Возвращает число", function() {
        assert.equal(getValue(), 10);
        assert.equal(getValue(), 10);
    });

});