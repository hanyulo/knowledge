# XML DATA

## Document Type Descriptors (DTDS, ID and ID ref attributes)

## Valid Structure
1. single root element
2. Matched tags, proper nesting
3. Unique attributes within elements


## Valid XML
1. Adhere to basic structure requirements
2. Adhere to content-specific specification
  * Document Type Descriptor (DTD)
  * XML Schema(XML Schema Descriptions XSD)

ex:
XML Document -> XML Parser -> Parsed XML
                           -> NOT VALID

### Advantage
1. assumed structure
2. data exchange
3. strongly typed data

### Benefit not use DTD
1. Flexibility
2. ease of changing
3. for irregular documents
  * document where the specification of the structure of the document is much, much larger than the document itself,

### DTD
 * Specify nested structure
 * if you want to put related data in specific part of xml document, you can use idrefs and id to do it.
   * id and idrefs
    * id need to be globally unique.
   * idref point to element with ids
   * id need to be unique
   * idref and id attributes and be set to singular or plural
 * Specify: element, attributes, order, nesting, occurences.
 * [example](https://www.w3schools.com/xml/xml_dtd.asp)

### XML Schema
 * Specify: element, attributes, order, nesting, occurences.
 * data types, keys, pointers.
 * written in XML
 * Feature of XML Schema that are not presented in DTD
  1. typed values
  2. key declarations
    * no need to globally unique.
  3. references like pointers
  4. current constraints
