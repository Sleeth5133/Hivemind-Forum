// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HiveReputation {
    struct User {
        uint256 pollen;
        uint256 guardScore;
        uint256 lastActivity;
        bool isGuard;
    }

    mapping(address => User) public beekeepers;
    uint256 public voteCount;

    event PollenEarned(address bee, uint256 amount);
    event GuardVoted(address guard, uint256 threadId, bool approve);

    function awardPollen(address bee, uint256 amount) external {
        require(amount <= 50, "Max 50 pollen per action");
        beekeepers[bee].pollen += amount;
        beekeepers[bee].lastActivity = block.timestamp;

        if (beekeepers[bee].pollen >= 300 && !beekeepers[bee].isGuard) {
            beekeepers[bee].isGuard = true;
        }

        emit PollenEarned(bee, amount);
    }

    function submitVote(uint256 threadId, bool approve) external {
        require(beekeepers[msg.sender].isGuard, "Only Guard Bees");
        voteCount++;
        emit GuardVoted(msg.sender, threadId, approve);
    }

    function getPollen(address bee) external view returns (uint256) {
        return beekeepers[bee].pollen;
    }
}