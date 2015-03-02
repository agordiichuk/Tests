define (require) ->

  Patterns = require 'SQL_Engine/ParserCore'

  describe 'ParserCore', ->
    it 'should be defined', ->
      expect(Patterns).toBeDefined()


  describe 'txt', ->
    it 'should be a function', ->
      expect(Patterns.txt).toEqual jasmine.any(Function)

    it 'should read predefined text', ->
      hello = Patterns.txt 'hello'
      expect(hello.exec('hello', 0)).toEqual
        res: 'hello',
        end: 5

    it 'should return undefined when text dose not much', ->
      hello = Patterns.txt 'hello'

      expect(hello.exec('hrlrl', 0)).toBe(undefined)


    it 'should read from current position', ->
      hello = Patterns.txt 'hello'

      expect(hello.exec('ssshello', 3)).toEqual
        res: 'hello',
        end: 8


  describe 'rgx', ->
    it 'should be a function', ->
      expect(Patterns.rgx).toEqual jasmine.any(Function)