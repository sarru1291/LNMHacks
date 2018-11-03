pragma solidity ^0.4.25;

contract Polling{
    
    address  public pollCreator;
    string public pollingName;
    uint public totalVotes;
     
    constructor(string _name) public{
        pollCreator=msg.sender;
        pollingName=_name;
    }
	
	struct Candidate{
        string name;
        uint voteCount;
    }
    Candidate[] public candidates;
     
    struct Voter{
        bool authorized;
        bool voted;
        uint vote;
    }
    
    modifier pollerCreatorOnly(){
        require(msg.sender==pollCreator);
        _;
    }
    
    mapping(address => Voter) public voters;
     
    function addCandidate(string _name) pollerCreatorOnly public{
        candidates.push(Candidate(_name,0));
    }
     
    function getAllCandidates() public view returns(uint){
        return candidates.length;
    }
     
    function authorize(address _person) pollerCreatorOnly public{
        voters[_person].authorized=true;
    }
     
    function vote(uint _voteIndex) public{
        require(!voters[msg.sender].voted);
        require(voters[msg.sender].authorized);
        voters[msg.sender].vote=_voteIndex;
        voters[msg.sender].voted=true;
        candidates[_voteIndex].voteCount+=1;
        totalVotes+=1;
    }
     
    function end() pollerCreatorOnly public{
        selfdestruct(pollCreator);
    }
    
}