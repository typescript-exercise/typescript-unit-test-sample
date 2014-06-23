describe('Sample クラスのテスト', () => {
    it('コンストラクタで渡した名前で事項紹介すること', () => {
        // setup
        var sample = new Sample('Taro');
        
        // exercise
        var actual = sample.introduceMyself();
        
        // verify
        expect(actual).toBe('My name is Taro.');
    });
    
    it('このテストはわざと失敗させています', () => {
        // verify
        expect('test').toBe('TEST');
    });
});
