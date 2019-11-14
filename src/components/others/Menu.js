import React from "react";

export default function Menu() {
    return (
        <div>
            <div className="menu_container">
                <div className="lesson_menu menu">
                    <div className="title">All Lessons</div>
                    <a href="/lesson/introduction_abcs" className="active"
                       title="Lesson 1: An Introduction, and the ABCs">Lesson 1: An Introduction, and the ABCs</a>
                    <a href="/lesson/letters_and_digits"  title="Lesson 1½: The 123s">Lesson 1½: The
                        123s</a>
                    <a href="/lesson/wildcards_dot"  title="Lesson 2: The Dot">Lesson 2: The Dot</a>
                    <a href="/lesson/matching_characters"  title="Lesson 3: Matching specific characters">Lesson
                        3: Matching specific characters</a>
                    <a href="/lesson/excluding_characters"  title="Lesson 4: Excluding specific characters">Lesson
                        4: Excluding specific characters</a>
                    <a href="/lesson/character_ranges"  title="Lesson 5: Character ranges">Lesson 5: Character
                        ranges</a>
                    <a href="/lesson/repeating_characters"  title="Lesson 6: Catching some zzz's">Lesson 6:
                        Catching some zzz's</a>
                    <a href="/lesson/kleene_operators"  title="Lesson 7: Mr. Kleene, Mr. Kleene">Lesson 7: Mr.
                        Kleene, Mr. Kleene</a>
                    <a href="/lesson/optional_characters"  title="Lesson 8: Characters optional">Lesson 8:
                        Characters optional</a>
                    <a href="/lesson/whitespaces"  title="Lesson 9: All this whitespace">Lesson 9: All this
                        whitespace</a>
                    <a href="/lesson/line_beginning_end"  title="Lesson 10: Starting and ending">Lesson 10:
                        Starting and ending</a>
                    <a href="/lesson/capturing_groups"  title="Lesson 11: Match groups">Lesson 11: Match
                        groups</a>
                    <a href="/lesson/nested_groups"  title="Lesson 12: Nested groups">Lesson 12: Nested
                        groups</a>
                    <a href="/lesson/more_groups"  title="Lesson 13: More group work">Lesson 13: More group
                        work</a>
                    <a href="/lesson/conditionals"  title="Lesson 14: It's all conditional">Lesson 14: It's all
                        conditional</a>
                    <a href="/lesson/misc_meta_characters"  title="Lesson 15: Other special characters">Lesson
                        15: Other special characters</a>
                    <a href="/lesson/end"  title="Lesson X: Infinity and beyond!">Lesson X: Infinity and
                        beyond!</a>
                    <div className="title">Practice Problems</div>
                    <a href="/problem/matching_decimal_numbers"  title="Problem 1: Matching a decimal numbers">Problem
                        1: Matching a decimal numbers</a>
                    <a href="/problem/matching_phone_numbers"  title="Problem 2: Matching phone numbers">Problem
                        2: Matching phone numbers</a>
                    <a href="/problem/matching_emails"  title="Problem 3: Matching emails">Problem 3: Matching
                        emails</a>
                    <a href="/problem/matching_html"  title="Problem 4: Matching HTML">Problem 4: Matching
                        HTML</a>
                    <a href="/problem/matching_filenames"  title="Problem 5: Matching specific filenames">Problem
                        5: Matching specific filenames</a>
                    <a href="/problem/trimming_whitespace" 
                       title="Problem 6: Trimming whitespace from start and end of line">Problem 6: Trimming whitespace
                        from start and end of line</a>
                    <a href="/problem/extracting_log_data" 
                       title="Problem 7: Extracting information from a log file">Problem 7: Extracting information from
                        a log file</a>
                    <a href="/problem/extracting_url_data" 
                       title="Problem 8: Parsing and extracting data from a URL">Problem 8: Parsing and extracting data
                        from a URL</a>
                    <a href="/problem/complete"  title="Problem X: Infinity and beyond!">Problem X: Infinity
                        and beyond!</a>
                </div>

                <div className="practice_menu menu">
                    <div className="title">Language Guides</div>
                    <a href="/references/csharp"  title="C#">C#</a>
                    <a href="/references/javascript"  title="Javascript">Javascript</a>
                    <a href="/references/java"  title="Java">Java</a>
                    <a href="/references/php"  title="PHP">PHP</a>
                    <a href="/references/python"  title="Python">Python</a>
                </div>
            </div>
        </div>
    );
}