# Layers Models

* in the course === five-layer models
  * others
    1. 4-layer model
      * combine the physical and data link layers into one
    2. OSI


## Open System Interconnection Model (OSI)
* most rigorously setting
* often used in academic settings or by various network certification organizations
* split application layer in five-layer model to three different layers
  * 7-th layer: Application Layer
  * 6-th layer: Presentation Layer
  * 5-th layer: Session Layer



### Three sub-application layers
* no encapsulation and un-encapsulation
* communicate through operating system instead of network

#### Session Layer
* it's responsible for things like facilitating the communication between actual applications and the transport layer

#### Operating System
* the part of the operating system that takes the application layer data that's been unencapsulated from all the layers below it(session layer), and hands it off to the next layer in the OSI model, the presentation layer.


#### Presentation Layer
* making sure that the unencapsulated application layer data is actually able to be understood by the application in question
* handle encryption or compression of data


#### Application Layer
*
