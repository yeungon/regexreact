import React from "react";
import {Link} from "react-router-dom";

export default function Notes() {
    return (
        <div>
            <div className="cheatsheet hidden-xs hidden-sm col-md-3">
                <div className="title">Lesson Notes</div>

                <table className="links">
                    <tbody>
                    <tr className="active">
                        <td className="status"/>
                        <td className="key">
                            <Link to="/lesson/introduction_abcs"
                                  title="Lesson 1: An Introduction, and the ABCs">abc…</Link>
                        </td>
                        <td className="description">
                            <Link to="/lesson/introduction_abcs"
                                  title="Lesson 1: An Introduction, and the ABCs">Letters</Link>
                        </td>
                    </tr>

                    <tr className="inactive">
                        <td className="status"/>
                        <td className="key">
                            <Link to="/lesson/letters_and_digits" title="Lesson 1½: The 123s">123…</Link>
                        </td>
                        <td className="description">
                            <Link to="/lesson/letters_and_digits" title="Lesson 1½: The 123s">Digits</Link>
                        </td>
                    </tr>

                    <tr className="inactive">
                        <td className="status"/>
                        <td className="key">
                            <Link to="/lesson/letters_and_digits" title="Lesson 1½: The 123s">\d</Link>
                        </td>
                        <td className="description">
                            <Link to="/lesson/letters_and_digits" title="Lesson 1½: The 123s">Any Digit</Link>
                        </td>
                    </tr>

                    <tr className="inactive">
                        <td className="status"/>
                        <td className="key">
                            <Link to="/lesson/letters_and_digits" title="Lesson 1½: The 123s">\D</Link>
                        </td>
                        <td className="description">
                            <Link to="/lesson/letters_and_digits" title="Lesson 1½: The 123s">Any Non-digit
                                character</Link>
                        </td>
                    </tr>

                    <tr className="inactive">
                        <td className="status"/>
                        <td className="key">
                            <Link to="/lesson/wildcards_dot" title="Lesson 2: The Dot">.</Link>
                        </td>
                        <td className="description">
                            <Link to="/lesson/wildcards_dot" title="Lesson 2: The Dot">Any Character</Link>
                        </td>
                    </tr>

                    <tr className="inactive">
                        <td className="status"/>
                        <td className="key">
                            <Link to="/lesson/wildcards_dot" title="Lesson 2: The Dot">\.</Link>
                        </td>
                        <td className="description">
                            <Link to="/lesson/wildcards_dot" title="Lesson 2: The Dot">Period</Link>
                        </td>
                    </tr>

                    <tr className="inactive">
                        <td className="status"/>
                        <td className="key">
                            <Link to="/lesson/matching_characters"
                                  title="Lesson 3: Matching specific characters">[abc]</Link>
                        </td>
                        <td className="description">
                            <Link to="/lesson/matching_characters" title="Lesson 3: Matching specific characters">Only
                                a,
                                b, or c</Link>
                        </td>
                    </tr>

                    <tr className="inactive">
                        <td className="status"/>
                        <td className="key">
                            <Link to="/lesson/excluding_characters"
                                  title="Lesson 4: Excluding specific characters">[^abc]</Link>
                        </td>
                        <td className="description">
                            <Link to="/lesson/excluding_characters" title="Lesson 4: Excluding specific characters">Not
                                a, b, nor c</Link>
                        </td>
                    </tr>

                    <tr className="inactive">
                        <td className="status"/>
                        <td className="key">
                            <Link to="/lesson/character_ranges" title="Lesson 5: Character ranges">[a-z]</Link>
                        </td>
                        <td className="description">
                            <Link to="/lesson/character_ranges" title="Lesson 5: Character ranges">Characters a to
                                z</Link>
                        </td>
                    </tr>

                    <tr className="inactive">
                        <td className="status"/>
                        <td className="key">
                            <Link to="/lesson/character_ranges" title="Lesson 5: Character ranges">[0-9]</Link>
                        </td>
                        <td className="description">
                            <Link to="/lesson/character_ranges" title="Lesson 5: Character ranges">Numbers 0 to 9</Link>
                        </td>
                    </tr>

                    <tr className="inactive">
                        <td className="status"/>
                        <td className="key">
                            <Link to="/lesson/character_ranges" title="Lesson 5: Character ranges">\w</Link>
                        </td>
                        <td className="description">
                            <Link to="/lesson/character_ranges" title="Lesson 5: Character ranges">Any Alphanumeric
                                character</Link>
                        </td>
                    </tr>

                    <tr className="inactive">
                        <td className="status"/>
                        <td className="key">
                            <Link to="/lesson/character_ranges" title="Lesson 5: Character ranges">\W</Link>
                        </td>
                        <td className="description">
                            <Link to="/lesson/character_ranges" title="Lesson 5: Character ranges">Any Non-alphanumeric
                                character</Link>
                        </td>
                    </tr>

                    <tr className="inactive">
                        <td className="status"/>
                        <td className="key">
                            <Link to="/lesson/repeating_characters"
                                  title="Lesson 6: Catching some zzz's">{'{'}m{'}'}</Link>
                        </td>
                        <td className="description">
                            <Link to="/lesson/repeating_characters" title="Lesson 6: Catching some zzz's">m
                                Repetitions</Link>
                        </td>
                    </tr>

                    <tr className="inactive">
                        <td className="status"/>
                        <td className="key">
                            <Link to="/lesson/repeating_characters"
                                  title="Lesson 6: Catching some zzz's">{'{'}m,n{'}'}</Link>
                        </td>
                        <td className="description">
                            <Link to="/lesson/repeating_characters" title="Lesson 6: Catching some zzz's">m to n
                                Repetitions</Link>
                        </td>
                    </tr>

                    <tr className="inactive">
                        <td className="status"/>
                        <td className="key">
                            <Link to="/lesson/kleene_operators" title="Lesson 7: Mr. Kleene, Mr. Kleene">*</Link>
                        </td>
                        <td className="description">
                            <Link to="/lesson/kleene_operators" title="Lesson 7: Mr. Kleene, Mr. Kleene">Zero or more
                                repetitions</Link>
                        </td>
                    </tr>

                    <tr className="inactive">
                        <td className="status"/>
                        <td className="key">
                            <Link to="/lesson/kleene_operators" title="Lesson 7: Mr. Kleene, Mr. Kleene">+</Link>
                        </td>
                        <td className="description">
                            <Link to="/lesson/kleene_operators" title="Lesson 7: Mr. Kleene, Mr. Kleene">One or more
                                repetitions</Link>
                        </td>
                    </tr>

                    <tr className="inactive">
                        <td className="status"/>
                        <td className="key">
                            <Link to="/lesson/optional_characters" title="Lesson 8: Characters optional">?</Link>
                        </td>
                        <td className="description">
                            <Link to="/lesson/optional_characters" title="Lesson 8: Characters optional">Optional
                                character</Link>
                        </td>
                    </tr>

                    <tr className="inactive">
                        <td className="status"/>
                        <td className="key">
                            <Link to="/lesson/whitespaces" title="Lesson 9: All this whitespace">\s</Link>
                        </td>
                        <td className="description">
                            <Link to="/lesson/whitespaces" title="Lesson 9: All this whitespace">Any Whitespace</Link>
                        </td>
                    </tr>

                    <tr className="inactive">
                        <td className="status"/>
                        <td className="key">
                            <Link to="/lesson/whitespaces" title="Lesson 9: All this whitespace">\S</Link>
                        </td>
                        <td className="description">
                            <Link to="/lesson/whitespaces" title="Lesson 9: All this whitespace">Any Non-whitespace
                                character</Link>
                        </td>
                    </tr>

                    <tr className="inactive">
                        <td className="status"/>
                        <td className="key">
                            <Link to="/lesson/line_beginning_end" title="Lesson 10: Starting and ending">^…$</Link>
                        </td>
                        <td className="description">
                            <Link to="/lesson/line_beginning_end" title="Lesson 10: Starting and ending">Starts and
                                ends</Link>
                        </td>
                    </tr>

                    <tr className="inactive">
                        <td className="status"/>
                        <td className="key">
                            <Link to="/lesson/capturing_groups" title="Lesson 11: Match groups">(…)</Link>
                        </td>
                        <td className="description">
                            <Link to="/lesson/capturing_groups" title="Lesson 11: Match groups">Capture Group</Link>
                        </td>
                    </tr>

                    <tr className="inactive">
                        <td className="status"/>
                        <td className="key">
                            <Link to="/lesson/nested_groups" title="Lesson 12: Nested groups">(a(bc))</Link>
                        </td>
                        <td className="description">
                            <Link to="/lesson/nested_groups" title="Lesson 12: Nested groups">Capture Sub-group</Link>
                        </td>
                    </tr>

                    <tr className="inactive">
                        <td className="status"/>
                        <td className="key">
                            <Link to="/lesson/more_groups" title="Lesson 13: More group work">(.*)</Link>
                        </td>
                        <td className="description">
                            <Link to="/lesson/more_groups" title="Lesson 13: More group work">Capture all</Link>
                        </td>
                    </tr>

                    <tr className="inactive">
                        <td className="status"/>
                        <td className="key">
                            <Link to="/lesson/conditionals" title="Lesson 14: It's all conditional">(abc|def)</Link>
                        </td>
                        <td className="description">
                            <Link to="/lesson/conditionals" title="Lesson 14: It's all conditional">Matches abc or
                                def</Link>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}