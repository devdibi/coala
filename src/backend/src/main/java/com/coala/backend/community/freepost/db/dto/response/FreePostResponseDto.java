package com.coala.backend.community.freepost.db.dto.response;

import com.coala.backend.community.freepost.db.entity.FreeImage;
import com.coala.backend.member.db.entity.Member;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

/*
    자유게시판 응답 DTO 입니다.
*/

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class FreePostResponseDto {
    private Long id;
    @JsonIgnore
    private Member memberId;
    private String title;
    private String detail;
    private LocalDateTime createAt;
    private LocalDateTime updateAt;
    private List<String> imagePath;
    private boolean isAnonymous;
    private boolean good;
    private int views;
    private int commentCount;
    private int goodCount;

    @Builder
    public FreePostResponseDto(Long id, Member memberId, String title, String detail,
                               LocalDateTime createAt, LocalDateTime updateAt, List<String> imagePath,
                               boolean isAnonymous, int views, boolean good, int commentCount, int goodCount) {

        this.id = id;
        this.memberId = memberId;
        this.title = title;
        this.detail = detail;
        this.createAt = createAt;
        this.updateAt = updateAt;
        this.imagePath = imagePath;
        this.good = good;
        this.isAnonymous = isAnonymous;
        this.views = views;
        this.commentCount = commentCount;
        this.goodCount = goodCount;
    }
}