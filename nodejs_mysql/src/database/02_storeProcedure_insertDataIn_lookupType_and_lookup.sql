-- -- store procedure start
-- DELIMITER //
-- CREATE PROCEDURE InsertLookups(IN data JSON)
-- BEGIN
--     DECLARE i INT DEFAULT 0;
--     DECLARE j INT DEFAULT 0;
--     DECLARE lastInsertId INT;
    
--     WHILE i < JSON_LENGTH(data) DO
--         -- Get the name from the current object
--         SET @lookupTypeName = JSON_UNQUOTE(JSON_EXTRACT(data, CONCAT('$[', i, '].name')));
        
--         -- Insert a new record into the lookupType table
--         INSERT INTO lookupType (name) VALUES (@lookupTypeName);
        
--         -- Get the array of lookups for the current object
--         SET @lookupsJSON = JSON_UNQUOTE(JSON_EXTRACT(data, CONCAT('$[', i, '].lookups')));
        
--         SET lastInsertId = LAST_INSERT_ID();
--         SET j = 0;
        
--         WHILE j < JSON_LENGTH(@lookupsJSON) DO
--             -- Get the label from the current lookup object
--             SET @labelName = JSON_UNQUOTE(JSON_EXTRACT(@lookupsJSON, CONCAT('$[', j, '].label')));
            
--             -- Insert a new record into the lookup table
--             INSERT INTO lookup (label, lookupTypeId) 
--             SELECT @labelName, lastInsertId;
            
--             SET j = j + 1;
--         END WHILE;
        
--         SET i = i + 1;
--     END WHILE;
-- END
-- //
-- DELIMITER ;
-- -- store procedure end

-- -- call store procedure start
SET @jsonData = '[
    {
        "name": "designation",
        "lookups": [
            { "label": "Developer" },
            { "label": "Tester" },
            { "label": "Scrummaster" }
        ]
    },
    {
        "name": "skillType",
        "lookups": [
            { "label": "Technical Skill" },
            { "label": "Non-Technical Skill" }
        ]
    }
]';

CALL InsertLookups(@jsonData);

-- -- call store procedure end



