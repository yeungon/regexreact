import React from "react";

function Notes(){
    return (
        <div>
            <div className="cheatsheet hidden-xs hidden-sm col-md-3">
          <div className="title">Lesson Notes</div>
          <table className="links">
            <tbody><tr className="active">
                <td className="status" />
                <td className="key">
                  <a href="/lesson/introduction_abcs" title="Lesson 1: An Introduction, and the ABCs">abc…</a>
                </td>
                <td className="description">
                  <a href="/lesson/introduction_abcs" title="Lesson 1: An Introduction, and the ABCs">Letters</a>
                </td>
              </tr>
              <tr className="inactive">
                <td className="status" />
                <td className="key">
                  <a href="/lesson/letters_and_digits" title="Lesson 1½: The 123s">123…</a>
                </td>
                <td className="description">
                  <a href="/lesson/letters_and_digits" title="Lesson 1½: The 123s">Digits</a>
                </td>
              </tr>
              <tr className="inactive">
                <td className="status" />
                <td className="key">
                  <a href="/lesson/letters_and_digits" title="Lesson 1½: The 123s">\d</a>
                </td>
                <td className="description">
                  <a href="/lesson/letters_and_digits" title="Lesson 1½: The 123s">Any Digit</a>
                </td>
              </tr>
              <tr className="inactive">
                <td className="status" />
                <td className="key">
                  <a href="/lesson/letters_and_digits" title="Lesson 1½: The 123s">\D</a>
                </td>
                <td className="description">
                  <a href="/lesson/letters_and_digits" title="Lesson 1½: The 123s">Any Non-digit character</a>
                </td>
              </tr>
              <tr className="inactive">
                <td className="status" />
                <td className="key">
                  <a href="/lesson/wildcards_dot" title="Lesson 2: The Dot">.</a>
                </td>
                <td className="description">
                  <a href="/lesson/wildcards_dot" title="Lesson 2: The Dot">Any Character</a>
                </td>
              </tr>
              <tr className="inactive">
                <td className="status" />
                <td className="key">
                  <a href="/lesson/wildcards_dot" title="Lesson 2: The Dot">\.</a>
                </td>
                <td className="description">
                  <a href="/lesson/wildcards_dot" title="Lesson 2: The Dot">Period</a>
                </td>
              </tr>
              <tr className="inactive">
                <td className="status" />
                <td className="key">
                  <a href="/lesson/matching_characters" title="Lesson 3: Matching specific characters">[abc]</a>
                </td>
                <td className="description">
                  <a href="/lesson/matching_characters" title="Lesson 3: Matching specific characters">Only a, b, or c</a>
                </td>
              </tr>
              <tr className="inactive">
                <td className="status" />
                <td className="key">
                  <a href="/lesson/excluding_characters" title="Lesson 4: Excluding specific characters">[^abc]</a>
                </td>
                <td className="description">
                  <a href="/lesson/excluding_characters" title="Lesson 4: Excluding specific characters">Not a, b, nor c</a>
                </td>
              </tr>
              <tr className="inactive">
                <td className="status" />
                <td className="key">
                  <a href="/lesson/character_ranges" title="Lesson 5: Character ranges">[a-z]</a>
                </td>
                <td className="description">
                  <a href="/lesson/character_ranges" title="Lesson 5: Character ranges">Characters a to z</a>
                </td>
              </tr>
              <tr className="inactive">
                <td className="status" />
                <td className="key">
                  <a href="/lesson/character_ranges" title="Lesson 5: Character ranges">[0-9]</a>
                </td>
                <td className="description">
                  <a href="/lesson/character_ranges" title="Lesson 5: Character ranges">Numbers 0 to 9</a>
                </td>
              </tr>
              <tr className="inactive">
                <td className="status" />
                <td className="key">
                  <a href="/lesson/character_ranges" title="Lesson 5: Character ranges">\w</a>
                </td>
                <td className="description">
                  <a href="/lesson/character_ranges" title="Lesson 5: Character ranges">Any Alphanumeric character</a>
                </td>
              </tr>
              <tr className="inactive">
                <td className="status" />
                <td className="key">
                  <a href="/lesson/character_ranges" title="Lesson 5: Character ranges">\W</a>
                </td>
                <td className="description">
                  <a href="/lesson/character_ranges" title="Lesson 5: Character ranges">Any Non-alphanumeric character</a>
                </td>
              </tr>
              <tr className="inactive">
                <td className="status" />
                <td className="key">
                  <a href="/lesson/repeating_characters" title="Lesson 6: Catching some zzz's">{'{'}m{'}'}</a>
                </td>
                <td className="description">
                  <a href="/lesson/repeating_characters" title="Lesson 6: Catching some zzz's">m Repetitions</a>
                </td>
              </tr>
              <tr className="inactive">
                <td className="status" />
                <td className="key">
                  <a href="/lesson/repeating_characters" title="Lesson 6: Catching some zzz's">{'{'}m,n{'}'}</a>
                </td>
                <td className="description">
                  <a href="/lesson/repeating_characters" title="Lesson 6: Catching some zzz's">m to n Repetitions</a>
                </td>
              </tr>
              <tr className="inactive">
                <td className="status" />
                <td className="key">
                  <a href="/lesson/kleene_operators" title="Lesson 7: Mr. Kleene, Mr. Kleene">*</a>
                </td>
                <td className="description">
                  <a href="/lesson/kleene_operators" title="Lesson 7: Mr. Kleene, Mr. Kleene">Zero or more repetitions</a>
                </td>
              </tr>
              <tr className="inactive">
                <td className="status" />
                <td className="key">
                  <a href="/lesson/kleene_operators" title="Lesson 7: Mr. Kleene, Mr. Kleene">+</a>
                </td>
                <td className="description">
                  <a href="/lesson/kleene_operators" title="Lesson 7: Mr. Kleene, Mr. Kleene">One or more repetitions</a>
                </td>
              </tr>
              <tr className="inactive">
                <td className="status" />
                <td className="key">
                  <a href="/lesson/optional_characters" title="Lesson 8: Characters optional">?</a>
                </td>
                <td className="description">
                  <a href="/lesson/optional_characters" title="Lesson 8: Characters optional">Optional character</a>
                </td>
              </tr>
              <tr className="inactive">
                <td className="status" />
                <td className="key">
                  <a href="/lesson/whitespaces" title="Lesson 9: All this whitespace">\s</a>
                </td>
                <td className="description">
                  <a href="/lesson/whitespaces" title="Lesson 9: All this whitespace">Any Whitespace</a>
                </td>
              </tr>
              <tr className="inactive">
                <td className="status" />
                <td className="key">
                  <a href="/lesson/whitespaces" title="Lesson 9: All this whitespace">\S</a>
                </td>
                <td className="description">
                  <a href="/lesson/whitespaces" title="Lesson 9: All this whitespace">Any Non-whitespace character</a>
                </td>
              </tr>
              <tr className="inactive">
                <td className="status" />
                <td className="key">
                  <a href="/lesson/line_beginning_end" title="Lesson 10: Starting and ending">^…$</a>
                </td>
                <td className="description">
                  <a href="/lesson/line_beginning_end" title="Lesson 10: Starting and ending">Starts and ends</a>
                </td>
              </tr>
              <tr className="inactive">
                <td className="status" />
                <td className="key">
                  <a href="/lesson/capturing_groups" title="Lesson 11: Match groups">(…)</a>
                </td>
                <td className="description">
                  <a href="/lesson/capturing_groups" title="Lesson 11: Match groups">Capture Group</a>
                </td>
              </tr>
              <tr className="inactive">
                <td className="status" />
                <td className="key">
                  <a href="/lesson/nested_groups" title="Lesson 12: Nested groups">(a(bc))</a>
                </td>
                <td className="description">
                  <a href="/lesson/nested_groups" title="Lesson 12: Nested groups">Capture Sub-group</a>
                </td>
              </tr>
              <tr className="inactive">
                <td className="status" />
                <td className="key">
                  <a href="/lesson/more_groups" title="Lesson 13: More group work">(.*)</a>
                </td>
                <td className="description">
                  <a href="/lesson/more_groups" title="Lesson 13: More group work">Capture all</a>
                </td>
              </tr>
              <tr className="inactive">
                <td className="status" />
                <td className="key">
                  <a href="/lesson/conditionals" title="Lesson 14: It's all conditional">(abc|def)</a>
                </td>
                <td className="description">
                  <a href="/lesson/conditionals" title="Lesson 14: It's all conditional">Matches abc or def</a>
                </td>
              </tr>
            </tbody></table>
        </div>
        
        </div>
    );
    
}

export default Notes;