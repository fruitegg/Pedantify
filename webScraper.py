from lxml import html
import requests

# English words obtained from: https://github.com/dwyl/english-words

Words = "Words.txt"

class Scrape:

    def __init__(self, number):
        self.text = ""
        self.words = []
        self.number = number
        self.dictionary = {}
    
    def readText(self, filename):
        files = open(filename)
        text = files.read()
        files.close()
        self.text = text
        return text

    def retrieveSynonyms(self,word):
        word = word.lower()
        page = requests.get('http://www.thesaurus.com/browse/' + str(word) + '?s=t')
        tree = html.fromstring( page.content )
        synonyms = tree.xpath( '//span[@class="text"]/text()' )
        return synonyms

    def getSynonyms(self,word):
        return self.dictionary[word]

    def format(self,dictionary):
        Output = ''
        for index in dictionary:
            Output += str(index) + ": " +  str(dictionary[index]) + "\n\n"
        return Output

    def save(self):
        text_file = open("Dictionary.txt", "w", newline='')
        text_file.write( self.format( self.dictionary ) )
        text_file.close()

    def main(self):
        self.text = self.readText(Words)
        self.words = self.text.split()
        for index in range(0, self.number):
            currentWord = self.words[ index ]
            try:
                synonyms = self.retrieveSynonyms(currentWord)
                if currentWord in self.dictionary:
                    self.dictionary[ currentWord ] += synonyms
                else:
                    self.dictionary[ currentWord ] = []
                    self.dictionary[ currentWord ] += synonyms
            except:
                continue     
        self.save()